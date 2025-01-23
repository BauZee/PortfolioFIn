import { Component } from '@angular/core';
import { NavigationCard } from '../../models/navigation.model';
import { NgClass } from '@angular/common';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-card',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './navigation-card.component.html',
  styleUrls: ['./navigation-card.component.css']
})

export class NavigationCardComponent {

  @Input() showContent = false;
  navigationCards: NavigationCard[] = [
    {
      href: '/about',
      question: 'Magst du mehr über mich persönlich erfahren?',
      callToAction: 'Dann klicke hier!'
    },
    {
      href: '/projects',
      question: 'Magst du mehr über meine Projekte erfahren?',
      callToAction: 'Dann klicke hier!'
    },
    {
      href: '/contact',
      question: 'Magst du mich persönlich kontaktieren?',
      callToAction: 'Dann klicke hier!'
    }
  ];
}
