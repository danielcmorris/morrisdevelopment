## Adding AI Tools to your Website
While the question/answer features and threading of an LLM can be helpful, often we really need more focused results that are specific to our own database needs. 
The issue we faced was having products on a job which were out of stock. How do you replace those with something equivalent or close to equivalent?
For example, we may have a sales meeting where a Sanyo XL12e 5000 lumen projector is listed on the quote you've given the client, but it's out of stock. 
Now, we have 10 others in our own warehouse and probably 50 in neighboring warehouses. We need to browse around and find something that works and it can be 
time consuming. However, we can easily take that product make, model and name and find a related item using AI. Here's how to do it.

## Vector Embedding
The first step is to learn how to get an array of “points”. This is the Vector Embedding that can be used for searching. Basically, 
if you have a sentence like, “Sanyo ABC123 5000 Lumen LED Projector” and a description of that product, you can post it to OpenAI 
and get this array. The LLM produces this array in a bunch of “dimensions”. Picture that like if it reorganized that sentence in 
as many ways as possible, calculating the positions of the text and the size of it and the uniqueness of the words and even some 
misspellings. That Vector Array is this list of points and when you have it matched to a sentence, you call that your “Embedding”

## Qdrant, a Vector Database
A vector database has 2 distinct features: It can store your data and it can search it by using vectors. How to do this is pretty simple: If you were 
to take the embedding you got from “Sanyo ABC123 5000 Lumen LED Projector”, and then add that as a record to your Qdrant database along with any meta 
data you want to keep with it (eg category or warehouse region), it becomes searchable. So you just do this for all your products. Now, later on when 
you want to find a replacement for a “Panasonic projector. 2000+ lumen”, you’ll post that to OpenAI, get your vector array and THEN you can post that
to Qdrant and it will simply run a math equation that returns the records where the “points” are closest together. Imagine it like a search where you’d 
count the common words in the text to get a number, then count the distance between those words to get a number. Obviously, it’s a bit more complicated,
but basically it’s just math. The LLM’s value is to take that text and convert it to this embedding that may contain all sorts of different way to say 
the same thing. As far as the vector database, there’s no real “AI”, it’s basically just sorting by a math equation which measures the similarity of 
vector arrays

## Bringing it together

You can have a vector database maintain an ID for your products in the meta data which can be used for updates. So on your product editor page, you simply add a function that takes the product data, gets a new embedding from OpenAI, saves the embedding in a local table, then posts the update to Qdrant.

When you have a product which needs to be replaced, you can simply take the previously saved embedding, post it to Qdrant, and then filter the result set by a match percentage (eg. only show things where the match is greater than 70%) .

The result set will include the metadata that you uploaded originally, so you can then easily pull the selected ProductID from your database, check to see what the availability is for each of those, and if the user selects one, you can simply swap out the Product ID of the item that was out of stock with the new item.

## Future Thoughts
One thing we’re certain to see in the near future is moving the LLM and the vector database locally. There are already a slew of LLMs you can run locally, on linux, mac and windows. Having this come embedded in a browser seems like a no-brainer. That means we’ll be able to do this embedding without an external call to an LLM. It’s quite likely that we’ll be able to have users posting the vector array directly rather than calling an LLM first. We may even be able to keep a local set of data. We already use local databases like IndexedDB, there is certain to be a Vector database option in the near future.


While there is a lot of hate on LLMs due to environmental and energy use, the reality is that only a very few of them are serious energy costs. For the ones you’d download and install locally, the work is already done and the processor need is negligible. Moreover, I’d be astonished if companies didn’t start offering access to their own Vector Databases. Imagine if Lenovo, Apple, and other PC companies offered an API to their vector database. You’d be able to run a search from any website that would then have the latest data about that product. Add several thousand of these to a curated list of vendors and you’d be able to compete with “Amazon” on a WordPress website.

