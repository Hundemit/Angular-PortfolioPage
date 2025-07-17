import { Component, inject, Input, Renderer2 } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { CommonModule } from '@angular/common';
// InViewport
import { InViewportAnimationService } from '../../shared/services/in-viewport-animation-service';
import { InViewportDirective, InViewportModule } from 'ng-in-viewport';

@Component({
  selector: 'app-myprojects',
  standalone: true,
  imports: [ProjectCard, CommonModule, InViewportModule, InViewportDirective],
  templateUrl: './myprojects.html',
  styleUrls: ['./myprojects.scss'],
})
export class Myprojects {
  @Input() count: number = 3; // Standardwert: alle Projekte anzeigen

  public readonly renderer = inject(Renderer2);
  public readonly iVAS = inject(InViewportAnimationService);

  ngOnInit() {
    this.iVAS.setRenderer(this.renderer);
  }

  // Beispiel-Projekte (normalerweise aus einer Datenquelle)
  projects = [
    {
      link: 'https://janhindemit.de/myprojects/google-cloud-data-analytics-certificate/',
      imageSrc:
        'https://janhindemit.de/wp-content/uploads/2024/09/Google-Cloud-Data-1024x495.png',
      title: 'Google Cloud Data Analytics Certificate',
    },
    {
      link: 'https://janhindemit.de/myprojects/google-cloud-data-analytics-certificate/',
      imageSrc:
        'https://janhindemit.de/wp-content/uploads/2024/09/Google-Cloud-Data-1024x495.png',
      title: 'Google Cloud Data Analytics Certificate',
    },
    {
      link: 'https://janhindemit.de/myprojects/google-cloud-data-analytics-certificate/',
      imageSrc:
        'https://janhindemit.de/wp-content/uploads/2024/09/Google-Cloud-Data-1024x495.png',
      title: 'Google Cloud Data Analytics Certificate',
    },
    {
      link: 'https://janhindemit.de/myprojects/google-cloud-data-analytics-certificate/',
      imageSrc:
        'https://janhindemit.de/wp-content/uploads/2024/09/Google-Cloud-Data-1024x495.png',
      title: 'Google Cloud Data Analytics Certificate',
    },
    // usw.
  ];
}
