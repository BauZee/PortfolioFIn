import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {
  @Input() skillCategories: any[] = [];

}
