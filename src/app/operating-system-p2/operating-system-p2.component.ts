import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operating-system-p2',
  templateUrl: './operating-system-p2.component.html',
  styleUrls: ['./operating-system-p2.component.scss']
})
export class OperatingSystemP2Component implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    const part1Btn = document.querySelector('#navOS');
    if (part1Btn !== null) {
      part1Btn.addEventListener('click', () => this.router.navigateByUrl("/operating-system"));
    }

    const part3Btn = document.querySelector('#navOS3');
    if (part3Btn !== null) {
      part3Btn.addEventListener('click', () => this.router.navigateByUrl("/operating-system-p3"));
    }
  }
}
