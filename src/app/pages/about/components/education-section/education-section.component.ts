import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { educationData } from '../../data/education.data';
@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css'],
})
export class EducationSectionComponent {
  education = educationData;
}
