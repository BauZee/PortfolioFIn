import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  displayText = '';
  showContent = false;
  isFlipping = false;
  private wrongText = 'Hallo, ich bin\nERwin Bauase';

  ngOnInit() {
    this.startTyping();

    // Nach 4 Sekunden anzeigen
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
