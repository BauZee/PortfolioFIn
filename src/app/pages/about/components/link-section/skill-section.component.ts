import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faDiscord, 
  faInstagram, 
  faSoundcloud, 
  faSpotify 
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-link-section',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './link-section.component.html',
  styleUrls: ['./link-section.component.css']})
export class SkillSectionComponent {
  socialCategories = [
    {
      name: 'Professional',
      links: [
        {
          platform: 'GitHub',
          url: 'https://github.com/BauZee',
          icon: faGithub
        },
        {
          platform: 'LinkedIn',
          url: 'https://www.linkedin.com/in/erwin-bause-10b592185/',
          icon: faLinkedin
        },
        {
          platform: 'Discord',
          url: 'https://discord.gg/.bauzee',
          icon: faDiscord
        }
      ]
    },
    {
      name: 'Social Media',
      links: [
        {
          platform: 'Instagram',
          url: 'https://instagram.com/ebause',
          icon: faInstagram
        },
        {
          platform: 'SoundCloud',
          url: 'https://soundcloud.com/erwin-bause',
          icon: faSoundcloud
        },
        {
          platform: 'Spotify',
          url: 'https://open.spotify.com/user/1140283119',
          icon: faSpotify
        }
      ]
    }
  ];
}
