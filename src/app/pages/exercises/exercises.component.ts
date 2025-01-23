import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.css'
})
export class ExercisesComponent {
  series = [
    {
      id: 1,
      title: 'HTML Basics',
      description: 'Erste Schritte mit HTML',
      topics: ['HTML', 'Struktur']
    },
    {
      id: 2,
      title: 'HTML Basics',
      description: 'Erste Schritte mit HTML',
      topics: ['HTML', 'Struktur']
    },
    {
      id: 3,
      title: 'HTML Basics',
      description: 'Erste Schritte mit HTML',
      topics: ['HTML', 'Struktur']
    },
    {
      id: 4,
      title: 'HTML Basics',
      description: 'Erste Schritte mit HTML',
      topics: ['HTML', 'Struktur']
    },
    {
      id: 5,
      title: 'HTML Basics',
      description: 'Erste Schritte mit HTML',
      topics: ['HTML', 'Struktur']
    },
    {
      id: 6,
      title: 'HTML Basics',
      description: 'Erste Schritte mit HTML',
      topics: ['HTML', 'Struktur']
    },
    {
      id: 7,
      title: 'HTML Basics',
      description: 'Erste Schritte mit HTML',
      topics: ['HTML', 'Struktur']
    },
    {
      id: 8,
      title: 'HTML Basics',
      description: 'Erste Schritte mit HTML',
      topics: ['HTML', 'Struktur']
    },
    {
      id: 9,
      title: 'HTML Basics',
      description: 'Erste Schritte mit HTML',
      topics: ['HTML', 'Struktur']
    },
  ]
}
