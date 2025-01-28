import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { NavigationCardComponent } from './components/navigation-card/navigation-card.component';
import { SeoService} from '../../services/seo.service';
import { homeSeoData } from './seo-data/seo.data';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, NavigationCardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  showContent = false;

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.setMetaTags();
    setTimeout(() => {
      this.showContent = true;
    }, 5000);
  }

  private setMetaTags(): void {
    this.seoService.setSeoData(homeSeoData);
  }


}
