import { Component, OnInit } from '@angular/core';
import { LinkSectionComponent } from './components/link-section/link-section.component';
import { ProfileSectionComponent } from './components/profil-section/profile-section/profile-section.component';
import { EducationSectionComponent } from './components/education-section/education-section.component';
import { SeoService } from '../../services/seo.service';
import { aboutSeoData } from './seo-data/seo.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LinkSectionComponent, ProfileSectionComponent, EducationSectionComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  constructor(private seoService: SeoService) {}
 
  ngOnInit(): void {
    this.seoService.setSeoData(aboutSeoData);
  }
}