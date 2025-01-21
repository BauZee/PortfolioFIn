import { Component } from '@angular/core';
import { SkillSectionComponent } from './components/skill-section/skill-section.component';
import { ProfileSectionComponent } from './components/profil-section/profile-section/profile-section.component';
import { EducationSectionComponent } from "./components/education-section/education-section.component";
import { EducationItemComponent } from './components/education-section/education-item/education-item.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SkillSectionComponent, ProfileSectionComponent, EducationSectionComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent { }
