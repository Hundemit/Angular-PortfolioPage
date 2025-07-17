import { Component, inject, Input, Renderer2 } from '@angular/core';
// InViewport
import { InViewportAnimationService } from '../../shared/services/in-viewport-animation-service';
import { InViewportDirective, InViewportModule } from 'ng-in-viewport';

@Component({
  selector: 'app-project-card',
  imports: [InViewportModule, InViewportDirective],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  // Eingabewerte für die Card
  @Input() title: string = '';
  @Input() imageSrc: string = '';
  @Input() link: string = '';

  public readonly renderer = inject(Renderer2);
  public readonly iVAS = inject(InViewportAnimationService);

  constructor() {
    this.iVAS.setRenderer(this.renderer);
  }
}
