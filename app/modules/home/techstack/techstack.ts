import { Component, inject, Renderer2 } from '@angular/core';

import { InViewportAnimationService } from '../../../shared/services/in-viewport-animation-service';
import { InViewportDirective, InViewportModule } from 'ng-in-viewport';

@Component({
  selector: 'app-techstack',
  imports: [InViewportModule, InViewportDirective],
  templateUrl: './techstack.html',
  styleUrl: './techstack.scss',
})
export class Techstack {
  public readonly renderer = inject(Renderer2);
  public readonly iVAS = inject(InViewportAnimationService);

  ngOnInit() {
    this.iVAS.setRenderer(this.renderer);
  }

  techstack = [
    {
      name: 'Angular',
      icon: 'angular.svg',
    },
  ];
}
