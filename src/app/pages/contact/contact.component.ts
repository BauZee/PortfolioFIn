import { Component } from '@angular/core';
import { FormComponentComponent } from "./components/form-component/form-component.component";

@Component({
  selector: 'app-contact',
  imports: [FormComponentComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
