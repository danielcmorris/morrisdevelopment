# How Vector Databases Work
Think of an embedding as the model taking a piece of text and placing it as a point on a chart. You can imagine it like laying a transparency sheet over the chart and marking where your text belongs, based on its meaning.  Every chunk of text gets its own set of points.  So, if I wanted to make a vector database of PDF Files, I could take the first page, copy the first paragraph, then get an "embedding" array of points from OpenAI (or any other AI embedder), then store that into my vector database with something in the meta like `{doc_url: https://my-storage, category: 'house cats', tags:['furry','dander','house pet'] } `. Then that array of points plus the JSON meta data will get inserted.  Now, do that for every paragraph in every PDF.  If you want, you can do larger chunks, but the bigger they are, the slower it is and the more it costs.   

So now, you want to search for some phrase. You don't post the phrase to the vector database, your search is actually Vector to Vector.  So you go and get the embedding of your search phrase and _then_ you can search your vector database.

Now instead of looking for a literal phrase (like using SQL LIKE), it looks for nearby points. Words or phrases that mean similar things end up near each other, so “quick” and “fast” might land close together, even if they don’t share letters.

To compare two points, it computes something called cosine similarity, which tells us how close the two vectors point. This calculation is extremely fast because it's just simple algebra.

So vector databases aren't magic or AI thinking, they’re just using math to compare the distance between points instead of the exact text.  You get back a sorted list of the number of records that have the closest points.

## Getting an Embedding
Almost every major AI service has embeddings, and there are a lot of small apps via Ollama that you can install to do embeddings.  Luckily, it's pretty cheap too.  So, setting it up locally may not be worth it.  I did about 2000 pages of OSHA regulations for $85 last month and it would have taken me all day to set up a local embedding tool and then to keep it online... not even worth it unless you have to.

### OpenAI
I've found this to be the easiest.  Here's the basic code just to get the embedding that we are using on this page:
```csharp
   public class QdrantLookupController : ControllerBase
   {
       private static readonly HttpClient _httpClient = new HttpClient();

       private readonly OpenAISettings _openAI;
       private readonly QdrantSettings _qdrant;


       public QdrantLookupController(IOptions<AppSettings> options)
       {
           var settings = options.Value;
           var s = options.Value;
           _openAI = s.OpenAI;
           _qdrant = s.Qdrant;                         
       }

       [HttpPost("embedding")]
       public async Task<IActionResult> RetrieveEmbedding(RequestData r)
       {
                   
           var openAiBody = new
           {
               input = r.text,
               model = "text-embedding-3-large"
           };

           var openAiContent = new StringContent(JsonConvert.SerializeObject(openAiBody), Encoding.UTF8, "application/json");
           _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _openAI.ApiKey);

           var openAiResponse = _httpClient.PostAsync($"{_openAI.BaseUrl}/embeddings", openAiContent).Result;

           if (!openAiResponse.IsSuccessStatusCode)
               return BadRequest("Failed to get embedding from OpenAI.");

           var openAiJson = openAiResponse.Content.ReadAsStringAsync().Result;
           var vectorSet = JObject.Parse(openAiJson)["data"][0]["embedding"].ToObject<double[]>();

           return Ok(vectorSet);
       }
.... //more code below
```
### How does this work with this example?
You can type in any text and if you look in the developer tools for network on your browser, you can see we're posting to our API server a simple object
```json
{"text":"whatever you typed in the box"}
```
and getting this array of points.
1. Post to your own api server (don't go direct to open AI, because your api keys $$$  are secret and someon can take them)
2. Create a post body to send to OpenAI.  You just need to inlude the model you want to use and the text.  (The bigger the model, the slower it is and the more it costs.)
3. Add your API key from OpenAI into the header for the Bearer authentication (so they can get your money)
4. Wait for your reply and then the data section of the reply object will have the embedding points.  THAT is the embedding.  In this sample, it just returns it and we can display it above.

### Where do you go from here?
The entire solution will be build the db, search the db and then return legible results.
#### Building your Vector DB
1. Rip your documents into chunks.  You probably don't want a 20 page document as your entire record in a vector db.  Maybe not even a full page. So find some tools that can break it down into text chunks.
2. Once you have these chunks in a directory or even a database, you'll want to use this same simple post, but this time insert it into the vector DB along with the text chunk.  (there are lots of scripts on github that do this for you to get the inital db set up quickly.
3. Once you've got your DB built, you then use this same Embedding script from above, but instead of returning that embedding, you'll query the vector database and ask for the top 5 results.

### But the results are useless chunks of meta-data
Yep, you have some chunks of text that are most likely related to the actual question but really it's just meta data and a chunk of text along with a ranking.  
__NOW__ the magic of AI comes into play.

At this point, rather than returning this to the user, you'll post the question the user asked __PLUS__ a prompt that says something like, "Respond to the questions using only the information below", and then append the text chunks.

And then the reply will be a nice human readable format that you can show your user.  You an even ask for it in HTML or Markdown (which I prefer) and render it however you want.

#### But wait.... there's more.
The next step is actually "threading".  I'll go into it later, but if you want to drill down, and ask followup questions, the way to do that is most effective is to actually send off an async request to OpenAI to summarize the thread and the text from the vector database.  Then, keep that thread in memory (or local storage) and ALSO the visual thread.  Then you can post things like, "The user asked x and you responded y based upon this dataset, and then they asked this and I looked it up in my vector db and found XYZ, annswer the question and respond".  That way you can keep the ugly rag data, plus the nice visual context can be built client-side.  

