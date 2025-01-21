import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-section',
  standalone: true,
  imports: [],
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.css']
})
export class ProfileSectionComponent {
  profileImage = 'assets/images/profile/profile-picture.png';
  
  aboutText = `I'm a software engineer based in Leipzig with 2 years of experience...`;
  
  personalInfo = {
    name: 'Erwin Bause',
    email: 'erwinbause23@gmail.com',
    experience: '2 Years',
    location: 'Leipzig, Germany',
    university: 'HTWK Leipzig',
    degree: 'B.Sc. Informatik'
  };

  languages = [
    'Deutsch (Muttersprache)',
    'English (Business Fluent)',
    'Russisch (Fließend)'
  ];

  workInfo = [
    'Frontend Developer',
    '15h/Week - Hybrid',
    'EXXETA AG'
  ];
}
