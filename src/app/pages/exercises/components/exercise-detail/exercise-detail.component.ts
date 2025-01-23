import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { exerciseData } from '../data/all-exercise';

@Component({
  selector: 'app-exercise-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './exercise-detail.component.html',
  styleUrl: './exercise-detail.component.css'
})
export class ExerciseDetailComponent {
  currentId!: string;
  exercises: any = exerciseData
 
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.currentId = params['id'];
    });
  }
 }