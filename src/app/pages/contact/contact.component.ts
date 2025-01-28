import { Component, OnInit } from '@angular/core';
import { FormComponentComponent } from "./components/form-component/form-component.component";
import { SeoService } from '../../services/seo.service';
import { contactSeoData } from './seo-data/seo.data';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormComponentComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
 showContent = false;

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.setMetaTags();
  }

  private setMetaTags(): void {
    this.seoService.setSeoData(contactSeoData);
  }
}
