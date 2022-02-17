import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operating-system-p3',
  templateUrl: './operating-system-p3.component.html',
  styleUrls: ['./operating-system-p3.component.scss']
})
export class OperatingSystemP3Component implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    const part1Btn = document.querySelector('#navOS');
    if (part1Btn !== null) {
      part1Btn.addEventListener('click', () => this.router.navigateByUrl("/operating-system"));
    }

    const part2Btn = document.querySelector('#navOS2');
    if (part2Btn !== null) {
      part2Btn.addEventListener('click', () => this.router.navigateByUrl("/operating-system-p2"));
    }
  }
}
