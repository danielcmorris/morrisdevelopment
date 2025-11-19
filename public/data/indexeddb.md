# Enhancing Performance with IndexedDB for Large Dataset Management

## The Challenge

Our internal database systems manage large datasets (~10,000 records with ~100 columns) that remain open across multiple browser windows for extended periods. This creates significant synchronization challenges when users make changes that need to appear in real-time across all active sessions.

## Evolution of Our Solution

### Initial Approach: In-Memory JavaScript
We initially maintained data in JavaScript variables with long-polling, but this proved unsustainable for the dataset size our business model requires.

### Second Attempt: LocalStorage
We tried LocalStorage, which is limited to 5-10MB of storage capacity. While this initially worked—allowing instant data loading on login with background updates—we quickly hit the storage limits. The system automatically failed over to downloading fresh copies on each load.

### Current Solution: IndexedDB
We migrated to IndexedDB, which typically provides storage space of 1GB or 60% of remaining disk space and supports asynchronous operations crucial for handling concurrent data tasks without blocking the main thread.

## Implementation Architecture

### Data Grid Component
We use [AG-Grid](https://www.ag-grid.com/), which uses row and column virtualization to render only visible content, allowing it to handle large datasets limited only by the browser's memory capacity. While AG-Grid supports server-side filtering and paging, our clients required working with a complete local copy for optimal responsiveness.

### Initial Load Process

1. **Empty Store Creation**: New user creates empty Jobs datastore in IndexedDB
2. **Grid Population**: Load records from datastore into `jobMaster.data` service variable
3. **Bind to Grid**: AG-Grid binds to the data object (initially empty)
4. **Request Updates**: Call `JobMasterUpdate` API requesting all records with update date > last stored date (null for first load)
5. **Loading Indicator**: Display dialog with spinner (15+ seconds for initial load)
6. **Populate and Display**: Append records to `jobMaster.data`, refresh grid cells, close dialog
7. **Async Storage**: Insert records into IndexedDB asynchronously, oldest-first, ensuring accurate tracking if the page closes mid-process

**Benefit**: Subsequent logins load from IndexedDB almost instantly, with AG-Grid rendering being the primary delay factor.

### Real-Time Synchronization

We use [SignalR](https://dotnet.microsoft.com/en-us/apps/aspnet/signalr) for real-time updates. SignalR is an open-source library that allows servers to push updates to connected clients, automatically selecting the best transport protocol (WebSockets, Server-Sent Events, or long polling) based on client and server capabilities.

**Update Flow:**

1. User 1 logs in at 7am, loads latest data (ExpireDate: 6:30am from early updates)
2. User 2 updates job #123456 status to "Complete" via REST API
3. API server implements update and triggers SignalR broadcast
4. User 1's browser receives broadcast, requests updates since 6:30am
5. API returns all changed records, including job #123456
6. IndexedDB replaces the existing record with job ID 123456
7. Update `jobMaster.data` variable
8. Call `refreshCells()` to update specific cells efficiently rather than refreshing the entire grid

**Design Note**: This system requires active connections—it's not designed for offline operation. The goal is enabling large teams to manage extensive datasets with real-time synchronization across multiple windows.

## Lessons Learned

### Version Management Challenge
IndexedDB requires version increments when modifying object stores, triggering an `update-needed` event before data access. 

**Solution**: Initialize database in Angular's `APP_INITIALIZER` to ensure completion before data requests. We store the database reference in a service variable to avoid multiple initializations that can freeze the application.

### Rollback Issues
When rolling back to an older code version, users with newer database versions encounter errors. 

**Current Solution**: Manually update version numbers in Git before deployment.

**Planned Solution**: Fetch the current database version via API before initialization. We'll likely implement this in a route-resolver for the lazy-loaded jobs module rather than `APP_INITIALIZER` to avoid delaying the login page.

## Performance Considerations

IndexedDB transaction handling is the primary performance bottleneck rather than data throughput. To optimize:

- Batch operations when possible
- Use indexed fields for efficient queries (we index `UpdatedDate`)
- Leverage transaction updates for efficient bulk operations

## Current Status

This IndexedDB-based system has now been in production since January of 2022 and has had zero failures.  

---

## References

- [Browser Storage Quotas (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- [IndexedDB vs LocalStorage Comparison](https://dev.to/armstrong2035/9-differences-between-indexeddb-and-localstorage-30ai)
- [AG-Grid Performance Optimization](https://angular.love/inside-ag-grid-techniques-to-make-the-fastest-javascript-datagrid-in-the-world/)
- [SignalR Real-Time Communication](https://dotnet.microsoft.com/en-us/apps/aspnet/signalr)
- [IndexedDB Performance Best Practices](https://rxdb.info/slow-indexeddb.html)
- [AG-Grid Transaction Updates](https://www.ag-grid.com/javascript-data-grid/data-update-transactions/)
- [Storage Quotas and Limits](https://browsee.io/blog/unleashing-the-power-a-comparative-analysis-of-indexdb-local-storage-and-session-storage/)