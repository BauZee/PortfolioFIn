import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent {
  @Input() title!: string;
  @Input() company!: string;
  @Input() duration!: string;
  @Input() details!: string[];
}
