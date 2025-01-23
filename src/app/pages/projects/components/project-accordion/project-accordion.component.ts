import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';

export interface Project {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  details: string[];
  technologies?: string[];
}

@Component({
  selector: 'app-project-accordion',
  standalone: true,
  imports: [NgClass,CommonModule],
  templateUrl: './project-accordion.component.html',
  styleUrls: ['./project-accordion.component.css']
})
export class ProjectAccordionComponent {
  @Input() project!: Project;
  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
