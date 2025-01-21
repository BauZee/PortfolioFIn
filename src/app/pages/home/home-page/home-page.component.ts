import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
private prefixText = 'Hallo, ich bin ';
  private nameText = ' Erwin Bause';
  displayTextPrefix = '';
  displayTextName = '';
  isTypingCompleteFlag = false;

  ngOnInit() {
    this.typeText();
  }
  private async typeText() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    for (let char of this.prefixText) {
      this.displayTextPrefix += char;
      await new Promise(resolve => setTimeout(resolve, 75));
    }

    for (let char of this.nameText) {
      this.displayTextName += char;
      await new Promise(resolve => setTimeout(resolve, 75));
    }

    this.isTypingCompleteFlag = true;
  }

}
