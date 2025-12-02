# Morris Development 
This simple angular website holds the basic public facing needs for Morris Development.  We'll host the source control on gitea

## Articles
The main power here is the articles section, which is a combination of the articles 
we have written ourselves, but also articles that we refer to.  

### Databases
1. MySQL is the primary database for the meta data of the articles and, if the articles are internal,
then the entire contents will be there as well, written in Markdown.
2. Qdrant is the vector database that we will use to handle the search features.

### AI Tools
The Articles section will have a search box where you can type in your question, it will get an embedding off of that question, post it to the Qdrant db and then return the results to the
API server, which will then forward that data plus the question to OpenAI, where we should get a 
nice clean response with foot-notes.

## Administration

### Adding External Articles
To add an external article, we login and go to the Article editor and paste in the URL of the article.  We then simply cut and paste the article into the content box.  This is not for display purposes, but rather for searching.

After hitting save, the API server will break down the article into paragraphs.  Then it will get an embedding for each paragraph and post that to qdrant with the meta-data.  

### Updating External Articles
After making an edit, hitting save will have the API server delete all records in the qdrant collection for that ArticleID.  Then it will process the article as if it were new.

## Next Steps
