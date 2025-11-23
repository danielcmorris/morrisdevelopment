import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div  class="w-full bg-gray-200 h-1 overflow-hidden">
      <div class="h-full bg-blue-600 animate-progress w-1/3"></div>
    </div>
  `,
  styles: [`
    @keyframes progress {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(300%); }
      100% { transform: translateX(-100%); }
    }
    
    .animate-progress {
      animation: progress 1.5s ease-in-out infinite;
    }
  `]
})
export class LoadingBarComponent {
  @Input() isLoading = false;
}