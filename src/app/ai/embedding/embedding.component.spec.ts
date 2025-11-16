import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddingComponent } from './embedding.component';

describe('EmbeddingComponent', () => {
  let component: EmbeddingComponent;
  let fixture: ComponentFixture<EmbeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmbeddingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
