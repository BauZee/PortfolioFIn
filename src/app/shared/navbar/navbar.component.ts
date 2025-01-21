import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuItems = [
    { name: 'Home', link: '#' },
    { name: 'About', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Resume', link: '#resume' },
    { name: 'Portfolio', link: '#portfolio' },
    { name: 'Blog', link: '#blog' },
  ];
}

