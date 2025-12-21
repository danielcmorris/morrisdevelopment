import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OllamaService {
  baseApiUrl = environment.API_URL ; 
  ollamaApiUrl = 'https://ollama.morrisdev.com/api/generate';


//   streamOllamaResponse(prompt: string): Observable<string> {
//   return new Observable(observer => {
//     fetch(this.apiUrl, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         model: 'mistral',
//         prompt: prompt,
//         stream: true
//       })
//     })
//     .then(response => {
//       const reader = response.body!.getReader();
//       const decoder = new TextDecoder();
//       let buffer = '';

//       const processStream = () => {
//         reader.read().then(({ done, value }) => {
//           if (done) {
//             observer.complete();
//             return;
//           }

//           // Decode the chunk and add to buffer
//           buffer += decoder.decode(value, { stream: true });
          
//           // Split by newlines to get individual JSON objects
//           const lines = buffer.split('\n');
//           buffer = lines.pop() || ''; // Keep incomplete line in buffer

//           lines.forEach(line => {
//             if (line.trim()) {
//               try {
//                 const json = JSON.parse(line);
//                 if (json.response) {
//                   observer.next(json.response); // Emit each token
//                 }
//               } catch (e) {
//                 console.error('Parse error:', e);
//               }
//             }
//           });

//           processStream(); // Continue reading
//         });
//       };

//       processStream();
//     })
//     .catch(err => observer.error(err));
//   });
// }

streamOllamaResponse(prompt:string):Observable<string>{
  return this.streamResponse(prompt,'openai');
}
streamResponse(prompt: string, provider: 'ollama' | 'openai', model?: string): Observable<string> {
  const apiUrl = provider === 'ollama' 
    ? this.ollamaApiUrl 
    : `${this.baseApiUrl}/api/AI/chat/stream`;
    
  const body = provider === 'ollama'
    ? { model: model || 'mistral', prompt: prompt, stream: true }
    : { prompt: prompt, model: model || 'gpt-4o-mini' };

  return new Observable(observer => {
    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    .then(response => {
      const reader = response.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      const processStream = () => {
        reader.read().then(({ done, value }) => {
          if (done) {
            observer.complete();
            return;
          }

          // Decode the chunk and add to buffer
          buffer += decoder.decode(value, { stream: true });
          
          // Split by newlines to get individual JSON objects
          const lines = buffer.split('\n');
          buffer = lines.pop() || ''; // Keep incomplete line in buffer

          lines.forEach(line => {
            line = line.trim();
            if (!line) return;
            
            // Handle SSE format (OpenAI uses "data: " prefix)
            if (line.startsWith('data: ')) {
              line = line.substring(6).trim();
            }
            
            // Skip [DONE] marker
            if (line === '[DONE]') {
              observer.complete();
              return;
            }
            
            try {
              const json = JSON.parse(line);
              
              // Handle error responses
              if (json.error) {
                observer.error(new Error(json.error));
                return;
              }
              
              // Handle completion
              if (json.done) {
                observer.complete();
                return;
              }
              
              // Emit the response token (works for both providers)
              if (json.response) {
                observer.next(json.response);
              }
            } catch (e) {
              // Silently skip parse errors (incomplete JSON chunks)
              console.warn('Parse error for line:', line, e);
            }
          });

          processStream(); // Continue reading
        });
      };

      processStream();
    })
    .catch(err => observer.error(err));
  });
}
}
