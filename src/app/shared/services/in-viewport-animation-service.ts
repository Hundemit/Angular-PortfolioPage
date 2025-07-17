import { Injectable } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { InViewportAction } from 'ng-in-viewport';

@Injectable({ providedIn: 'root' })
export class InViewportAnimationService {
  private renderer: Renderer2 | null = null;

  // Speichert den Renderer2
  public setRenderer(renderer: Renderer2) {
    this.renderer = renderer;
  }

  public animateSectionOnVisibility(
    event: InViewportAction,
    delay: string = '0s',
    duration: string = '0.5s',
  ): void {
    const target = event.target;
    const visible = event.visible;

    if (target instanceof HTMLElement) {
      target.style.setProperty('--delay', delay);
      target.style.setProperty('--duration', duration);
    }

    console.log('target');

    if (visible) this.renderer?.addClass(target, 'active');
  }
}
