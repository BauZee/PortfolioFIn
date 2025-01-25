import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { SeoService } from '../../../../services/seo.service';
import { contactSeoData } from '../../seo-data/seo.data';
@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  success = false; 

  private serviceID = 'service_dm39bwc';
  private templateID = 'template_nxtbox9';
  private userID = 'DVPhbOR5YAbL-ow0m';

  constructor(private fb: FormBuilder, private seoService: SeoService) {}

  ngOnInit(): void {
    this.initForm();
    this.seoService.setSeoData(contactSeoData);

  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.valid) {
      const templateParams = {
        from_name: this.contactForm.get('name')?.value,
        from_email: this.contactForm.get('email')?.value,
        subject: this.contactForm.get('subject')?.value,
        message: this.contactForm.get('message')?.value
      };

      emailjs.send(this.serviceID, this.templateID, templateParams, this.userID)
        .then((result: EmailJSResponseStatus) => {
          console.log('Die E-Mail wurde erfolgreich versendet', result.text);
          this.success = true;
          this.contactForm.reset();
          this.submitted = false;
        }, (error) => {
          console.error('Das versenden der E-Mail ist fehlgeschlagen:', error.text);
        });
    }
  }
}
