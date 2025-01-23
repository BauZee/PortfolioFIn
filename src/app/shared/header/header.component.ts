import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuItems = [
    { 
      label: 'Home', 
      link: '/' 
    },
    { 
      label: 'Projekte', 
      link: '/projects',
      subItems: [
        { label: 'Private Projekte', link: '/projects#private'},
        { label: 'WordPress Projekte', link: '/projects#wordpress'},
        { label: 'Angular & Tailwind', link: '/projects#angular'}
      ]
    },
    {
      label: 'Über mich',
      link: '/about'
    },
    {
      label: 'Kontakt',
      link: '/contact'
    }
];

  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

}

