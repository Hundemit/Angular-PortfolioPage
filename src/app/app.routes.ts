import { Routes } from '@angular/router';
import { Home } from './modules/home/home';
import { Myprojects } from './modules/myprojects/myprojects';

export const routes: Routes = [
  { path: '', component: Home }, // Startseite zeigt Home-Komponente
  { path: 'myprojects', component: Myprojects }, // Startseite zeigt myprojects-Komponente
];
