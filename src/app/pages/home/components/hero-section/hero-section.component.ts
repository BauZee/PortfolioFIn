import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NgClass],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements OnInit {
  displayText = '';
  showContent = false;
  isFlipping = false;
  private wrongText = 'Hallo, ich bin\nERwin Bauase';

  ngOnInit() {
    this.startTyping();

    setTimeout(() => {
      this.showContent = true;
      this.startFlipping();
    }, 5000);
  }

  private startFlipping() {
    setInterval(() => {
      this.isFlipping = true;
      setTimeout(() => (this.isFlipping = false), 1000);
    }, 5000); 
  }

  private async startTyping() {
    await this.wait(1000);
    await this.typeText(this.wrongText);
    await this.wait(500);
    await this.deleteText(12);
    await this.wait(200);
    await this.typeText('Erwin Bause');
  }

  private async typeText(text: string) {
    for (const char of text) {
      this.displayText += char;
      await this.wait(75);
    }
  }

  private async deleteText(chars: number) {
    for (let i = 0; i < chars; i++) {
      this.displayText = this.displayText.slice(0, -1);
      await this.wait(50);
    }
  }

  private wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}