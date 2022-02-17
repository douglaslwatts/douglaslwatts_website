import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'astral-axiom';

  /**
   * Constructs an instance of this AppComponent.
   *
   * @param securityLevelChanger A security level changing service for this component
   */
  constructor(
              private router: Router,
             ) { }

  /**
   * An implementation of the ngOnInit() method. Subscribes this component as an observer of the
   * authenticator's logged in observable so that navigation to other pages can be controlled based
   * on whether a user is logged in.
   */
  ngOnInit(): void {
    const homeBtn = document.querySelector('#home');
    if (homeBtn !== null) {
      homeBtn.addEventListener('click', () => this.router.navigateByUrl('/'));
    }

    const aboutBtn = document.querySelector('#about');
    if (aboutBtn !== null) {
      aboutBtn.addEventListener('click', () => this.router.navigateByUrl('/about'));
    }

    const cliBtn = document.querySelector('#cli');
    if (cliBtn !== null) {
      cliBtn.addEventListener('click', () => this.router.navigateByUrl('/cli'));
    }

    const bashBtn = document.querySelector('#bash');
    if (bashBtn !== null) {
      bashBtn.addEventListener('click', () => this.router.navigateByUrl('/bash'));
    }

    const rustBtn = document.querySelector('#rust');
    if (rustBtn !== null) {
      rustBtn.addEventListener('click', () => this.router.navigateByUrl('/rust'));
    }

    const osBtn = document.querySelector('#os');
    if (osBtn !== null) {
      osBtn.addEventListener('click', () => this.router.navigateByUrl('/operating-system'));
    }

    const archBtn = document.querySelector('#arch');
    if (archBtn != null) {
      archBtn.addEventListener('click', () => this.router.navigateByUrl('/arch-install'));
    }
  }
}
