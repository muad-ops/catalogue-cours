import { Component } from '@angular/core';

import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { EnTete } from './composants/en-tete/en-tete';
import { PiedPage } from './composants/pied-page/pied-page';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    EnTete,
    PiedPage
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}