import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operating-system',
  templateUrl: './operating-system.component.html',
  styleUrls: ['./operating-system.component.scss']
})
export class OperatingSystemComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    const part2Btn = document.querySelector('#navOS2');
    if (part2Btn !== null) {
      part2Btn.addEventListener('click', () => this.router.navigateByUrl("/operating-system-p2"));
    }

    const part3Btn = document.querySelector('#navOS3');
    if (part3Btn !== null) {
      part3Btn.addEventListener('click', () => this.router.navigateByUrl("/operating-system-p3"));
    }
  }
}
