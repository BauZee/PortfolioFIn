import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { exercisesSeoData } from './seo-data/seo.data';
import { getSeriesSeoData } from './seo-data/seo.data';
import { ActivatedRoute } from '@angular/router';
import { seriesData } from './seo-data/seo.data';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.css'
})
export class ExercisesComponent implements OnInit {
  currentExerciseId: number | null = null;

  series = seriesData;

  constructor(private seoService: SeoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.currentExerciseId = +id;
        const seoData = getSeriesSeoData(this.currentExerciseId);
        if (seoData) this.seoService.setSeoData(seoData);
      } else {
        this.currentExerciseId = null;
        this.seoService.setSeoData(exercisesSeoData);
      }
    });
  }
}