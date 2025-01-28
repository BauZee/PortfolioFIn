import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mobileMenuOpen = false;

  menuItems = [
    { 
      label: 'Home', 
      link: '/' 
    },
    { 
      label: 'Projekte', 
      link: '/projects',
      isOpen: false,
      subItems: [
        { label: 'Private Projekte', link: '/projects#private'},
        { label: 'WordPress Projekte', link: '/projects#wordpress'},
        { label: 'Angular & Tailwind', link: '/projects#angular'}
      ]
    },
    {
      label: 'Übungsserien',
      link: '/exercise',
      isOpen: false,
      subItems: Array.from({ length: 9 }, (_, i) => ({
        label: `Serie ${i + 1}`,
        link: `/exercise/${i + 1}`
      }))
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

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  
  closeMobileMenu() {
    this.mobileMenuOpen = false;
    this.menuItems.forEach(item => item.isOpen = false);
  }
  
  toggleSubMenu(item: any) {
    this.menuItems.forEach(menuItem => {
      if (menuItem !== item) {
        menuItem.isOpen = false;
      }
    });
    
    // Toggle des aktuellen Untermenüs
    item.isOpen = !item.isOpen;
  }
}