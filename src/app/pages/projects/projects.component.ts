import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { NgClass } from '@angular/common';
import { ProjectAccordionComponent } from './components/project-accordion/project-accordion.component';
import { SkillCardComponent } from './components/skills-card/skill-card/skill-card.component';
import { privateProjects } from './data/projects.data';
import { wordpressProjects } from './data/projects.data';
import { angularProjects } from './data/projects.data';
import { skillCategories } from './data/projects.data';
import { projectsSeoData } from './seo-data/seo.data';
import { SeoService } from '../../services/seo.service';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectAccordionComponent, SkillCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})


export class ProjectsComponent {
  privateProjects = privateProjects;  
  wordpressProjects = wordpressProjects;
  angularProjects = angularProjects
  skillCategories = skillCategories

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.setMetaTags();
  }

  private setMetaTags(): void {
    this.seoService.setSeoData(projectsSeoData);
  }
}
