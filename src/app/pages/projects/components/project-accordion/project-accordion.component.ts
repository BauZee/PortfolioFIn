import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';


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

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
