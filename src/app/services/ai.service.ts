import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AiService {
    server = environment.API_URL;
    

    constructor(private http: HttpClient) {}
    getEmbedding(text: string) {

        return this.http.post(this.server + '/api/qdrantlookup/embedding', { text:text });
    }
}
