import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'excuse-generator';
  menuOpen = false;

  ngOnInit() {
    let isDarkMode = false;
    const darkModeSetting = localStorage.getItem('darkMode');
    // default to dark mode
    if (darkModeSetting === null) {
      localStorage.setItem('darkMode', 'true');
      isDarkMode = true;
    }
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
