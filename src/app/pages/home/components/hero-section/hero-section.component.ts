import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NgClass],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  displayText: string = '';
  showContent: boolean = false;
  isFlipping: boolean = false;
  initialText: string = 'Hallo, ich bin\nERwin Bauase';
  finalText: string = 'Erwin Bause';

  ngOnInit(): void {
    this.animateText();
    this.showAndFlipContent();
  }

  private animateText(): void {
    this.delay(1000)
      .then(() => this.typeText(this.initialText))
      .then(() => this.delay(500))
      .then(() => this.deleteText(12))
      .then(() => this.delay(200))
      .then(() => this.typeText(this.finalText));
  }

  private showAndFlipContent(): void {
    setTimeout(() => {
      this.showContent = true;
      this.startFlipping();
    }, 5000);
  }

  private startFlipping(): void {
    setInterval(() => {
      this.isFlipping = true;
      setTimeout(() => {
        this.isFlipping = false;
      }, 1000);
    }, 3500);
  }

  private typeText(text: string): Promise<void> {
    return new Promise(async (resolve) => {
      for (const char of text) {
        this.displayText += char;
        await this.delay(75);
      }
      resolve();
    });
  }

  private deleteText(count: number): Promise<void> {
    return new Promise(async (resolve) => {
      for (let i = 0; i < count; i++) {
        this.displayText = this.displayText.slice(0, -1);
        await this.delay(50);
      }
      resolve();
    });
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
