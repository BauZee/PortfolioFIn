import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NgClass } from '@angular/common';


@Component({
  selector: 'app-project-accordion',
  standalone: true,
  imports: [NgClass,CommonModule],
  templateUrl: './project-accordion.component.html',
  styleUrls: ['./project-accordion.component.css']
})
export class ProjectAccordionComponent {
  @Input() project!: any;
  isOpen: boolean = false;
  @Input() isPrivateProject: boolean = false;



  toggle() {
    this.isOpen = !this.isOpen;
  }
}
