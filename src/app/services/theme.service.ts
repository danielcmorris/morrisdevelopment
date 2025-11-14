import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal(false);

  constructor() {
    // Load saved preference
    const saved = localStorage.getItem('darkMode');
    if (saved) {
      this.isDarkMode.set(saved === 'true');
    }
  }

  toggleTheme() {
    this.isDarkMode.update(dark => !dark);
    localStorage.setItem('darkMode', this.isDarkMode().toString());
  }
}