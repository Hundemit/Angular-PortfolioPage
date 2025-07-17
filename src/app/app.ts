import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './modules/header/header';
import { Footer } from './modules/footer/footer';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [],
})
export class App {
  protected readonly title = signal('portfolio-page');
}
