import { Component, inject, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Myprojects } from '../myprojects/myprojects';
import {
  animate,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { Techstack } from './techstack/techstack';

// InViewport
import { InViewportAnimationService } from '../../shared/services/in-viewport-animation-service';
import { InViewportDirective, InViewportModule } from 'ng-in-viewport';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    Myprojects,
    InViewportModule,
    InViewportDirective,
    Techstack,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  public readonly renderer = inject(Renderer2);
  public readonly iVAS = inject(InViewportAnimationService);

  ngOnInit() {
    this.iVAS.setRenderer(this.renderer);
  }
}
