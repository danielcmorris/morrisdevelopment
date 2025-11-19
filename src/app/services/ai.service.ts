import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ContactUs } from '../../interfaces/contactUs';
import { Article } from '../../interfaces/article.interface';

@Injectable({
  providedIn: 'root',
})
export class AiService {
    server = environment.API_URL;
    

    constructor(private http: HttpClient) {}
    getEmbedding(text: string) {

        return this.http.post(this.server + '/api/qdrantlookup/embedding', { text:text });
    }
    getContactUsResponse(data: ContactUs) {

        return this.http.post(this.server + '/api/qdrantlookup/auto-responder', data);
    }
     postArticle(data: Article) {

        return this.http.post(this.server + '/api/qdrantlookup/add-article', data);
    }
}
