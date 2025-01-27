// src/app/services/seo.service.ts

import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document
  ) {}

  /**
   * Setzt alle SEO-Daten auf Basis eines übergebenen Datenobjekts
   * @param seoData Objekt mit SEO-Daten
   */
  setSeoData(seoData: any): void {
    if (seoData.title) {
      this.titleService.setTitle(seoData.title);
    }
    if (seoData.description) {
      this.meta.updateTag({ name: 'description', content: seoData.description });
    }

    if (seoData.keywords) {
      this.meta.updateTag({ name: 'keywords', content: seoData.keywords });
    }

    if (seoData.og) {
      for (const key in seoData.og) {
        if (seoData.og.hasOwnProperty(key)) {
          const property = `og:${key}`;
          this.meta.updateTag({ property, content: seoData.og[key] });
        }
      }
    }

    if (seoData.og) {
      if (seoData.og['image:alt']) {
        this.meta.updateTag({ property: 'og:image:alt', content: seoData.og['image:alt'] });
      }
      if (seoData.og['image:width']) {
        this.meta.updateTag({ property: 'og:image:width', content: seoData.og['image:width'] });
      }
      if (seoData.og['image:height']) {
        this.meta.updateTag({ property: 'og:image:height', content: seoData.og['image:height'] });
      }
    }

    if (seoData.schema) {
      const existingSchema = this.document.querySelector('script[type="application/ld+json"]');
      if (existingSchema) {
        existingSchema.remove();
      }
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(seoData.schema);
      this.document.head.appendChild(script);
    }
  }
}
