import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.css']
})
export class ProfileSectionComponent {
  profileImage = 'assets/images/profile/profile-picture.png';
  profilName = 'Erwin Bause';

  
  aboutText = 'Mein Name ist Erwin Bause, ich studiere derzeit im dritten Semester Informatik. ' +
              'Neben meinem Studium arbeite ich als Werkstudent bei der Exxeta AG als Front-End Entwickler. ' +
              'Meine Hobbys sind:';
  
  hobbies = ['Camping', 'Schwimmen', 'Programmieren', 'Fahrradtouren und -reparaturen'];

  personalInfoLeft = [
    { label: 'Name', value: 'Erwin Bause' },
    { label: 'E-Mail', value: 'erwinbause23@gmail.com' },
    { label: 'Experience', value: '2 Years' }
  ];

  personalInfoRight = [
    { label: 'Wohnort', value: 'Leipzig, Germany' },
    { label: 'Hochschule', value: 'HTWK Leipzig' },
    { label: 'Studium', value: 'B.Sc. Informatik' }
  ];

  languages = [
    { label: 'Muttersprache', value: 'Deutsch' },
    { label: 'Zweitsprache', value: 'Englisch (Business Fluent)' },
    { label: 'Drittsprache', value: 'Russisch (Fließend)' }
  ];

  workInfo = [
    { label: 'Position', value: 'Frontend Developer' },
    { label: 'Arbeitszeit', value: '15h/Week - Hybrid' },
    { label: 'Unternehmen', value: 'EXXETA AG' }
  ];
}

