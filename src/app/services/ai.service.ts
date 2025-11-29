import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ContactUs } from '../../interfaces/contactUs';
import { Article } from '../../interfaces/article.interface';

@Injectable({
    providedIn: 'root',
})
export class AiService {
    server = environment.API_URL;


    constructor(private http: HttpClient) { }
    getEmbedding(text: string) {

        return this.http.post(this.server + '/api/qdrantlookup/embedding', { text: text });
    }
    getContactUsResponse(data: ContactUs) {

        return this.http.post(this.server + '/api/qdrantlookup/auto-responder', data);
    }
    postArticle(data: Article | FormData, command: string = 'summarize') {
        let url = this.server + `/api/admin/article/process?command=${command}`;

        return this.http.post(url, data);
    }
    searchArticle(data: string) {
        let url = `${this.server}/api/article/search-library?q=${data}`
        return this.http.post(url, '');
    }
}
