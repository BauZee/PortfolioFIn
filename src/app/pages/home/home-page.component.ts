import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { NavigationCardComponent } from './components/navigation-card/navigation-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, NavigationCardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  showContent = false;

  ngOnInit() {
    setTimeout(() => {
      this.showContent = true;
    }, 5000);
  }
}
