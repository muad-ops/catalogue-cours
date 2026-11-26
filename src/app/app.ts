
import { Component, inject } from '@angular/core';

import { EnTete } from './composants/en-tete/en-tete';
import { PiedPage } from './composants/pied-page/pied-page';

import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router
} from '@angular/router';

import { Session } from './services/session';

@Component({
  selector: 'app-root',
  imports: [
    EnTete,
    PiedPage,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
session = inject(Session);
private router = inject(Router);
deconnecter() {
this.session.deconnecter();
this.router.navigateByUrl('/');
}
}
