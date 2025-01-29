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

  
aboutText = 'Mein Name ist Erwin Bause, ich studiere Informatik im dritten Semester und arbeite als Werkstudent bei der Exxeta AG im Bereich Front-End Entwicklung. ' +
            'Meine Faszination für Technik und Medizin führte mich nach dem Abitur mit technischem Schwerpunkt zunächst zum Medizintechnikstudium, um beide Interessensgebiete zu vereinen. ' +
            'Dort entdeckte ich meine Begeisterung für Informatik und Programmierung wieder und entschied mich nach dem Abschluss für ein weiteres Studium der Informatik. ' +
            'In meiner Freizeit widme ich mich entweder technischen Projekten oder begebe mich in die Natur - Camping, Fahrradtouren oder Reparaturen in der Fahrradwerkstatt. ' +
            'Zu meinen Interessen zählen: ';
          
  
  hobbies = ['Camping', 'Softwarearchitektur', 'Programmieren', 'Fahrradtouren und -reparaturen', 'Front End Entwicklung', 'Konzerte/Festivals/Clubs'];

  personalInfoLeft = [
    { label: 'Name', value: 'Erwin Bause' },
    { label: 'E-Mail', value: 'erwinbause23@gmail.com' },
    { label: 'Alter', value: '24' }
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
    { label: 'Arbeitszeit', value: '15h/Woche - Hybrid' },
    { label: 'Unternehmen', value: 'EXXETA AG' }
  ];
}

