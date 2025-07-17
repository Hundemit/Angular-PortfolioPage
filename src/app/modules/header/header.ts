import { CommonModule } from '@angular/common';
import { Component, inject, Renderer2 } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  useAnimation,
} from '@angular/animations';
import { RouterLink } from '@angular/router';

// InViewport
import { InViewportAnimationService } from '../../shared/services/in-viewport-animation-service';
import { InViewportDirective, InViewportModule } from 'ng-in-viewport';

interface MenuItem {
  label: string;
  href: string;
  fragment: string;
  colorClass: string;
}

interface SocialLink {
  href: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, InViewportModule, InViewportDirective],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  animations: [
    trigger('MenuCardOpenClose', [
      state(
        'open',
        style({
          transform: 'translateY(0px)',
          opacity: 1,
          visibility: 'visible',
        }),
      ),
      state(
        'closed',
        style({
          transform: 'translateY(100px)',
          opacity: 0,
          visibility: 'hidden',
        }),
      ),
      transition('closed <=> open', [animate('100ms linear')]),
    ]),
  ],
})
export class Header {
  isActiveMenu = false;
  public readonly renderer = inject(Renderer2);
  public readonly iVAS = inject(InViewportAnimationService);

  constructor() {
    this.iVAS.setRenderer(this.renderer);
  }

  toggleMenu() {
    this.isActiveMenu = !this.isActiveMenu;
    console.log(this.isActiveMenu);
  }

  menuItems: MenuItem[] = [
    {
      label: 'Home.',
      href: '/',
      fragment: 'hero-section',
      colorClass: 'bg-accent-1',
    },
    {
      label: 'Projekte.',
      href: '/myprojects',
      fragment: '',
      colorClass: 'bg-accent-2',
    },
    {
      label: 'Über mich.',
      href: '/',
      fragment: 'aboutme',
      colorClass: 'bg-accent-4',
    },
    {
      label: 'Kontakt.',
      href: '/',
      fragment: 'kontakt',
      colorClass: 'bg-accent-3',
    },
  ];

  socialLinks: SocialLink[] = [
    { href: 'https://www.instagram.com/hindemit.ui/', icon: 'Instagram.svg' },
    { href: 'https://www.facebook.com/hindemitjan/', icon: 'Facebook.svg' },
    {
      href: 'https://www.linkedin.com/in/jan-hindemit-637104250/',
      icon: 'linkedin-logo.svg',
    },
    { href: 'https://dribbble.com/Hundemit', icon: 'dribbble-logo.svg' },
  ];
}
