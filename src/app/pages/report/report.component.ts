import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { reportSeoData } from './seo-data/seo.data';
@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
 constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.setMetaTags();

  }

  private setMetaTags(): void {
    this.seoService.setSeoData(reportSeoData);
  }
}
