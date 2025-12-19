import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OllamaService {
  
  streamOllamaResponse(prompt: string): Observable<string> {
  return new Observable(observer => {
    fetch('https://ollama.morrisdev.com/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'mistral',
        prompt: prompt,
        stream: true
      })
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
            if (line.trim()) {
              try {
                const json = JSON.parse(line);
                if (json.response) {
                  observer.next(json.response); // Emit each token
                }
              } catch (e) {
                console.error('Parse error:', e);
              }
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
