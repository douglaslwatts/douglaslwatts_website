import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-bash',
  templateUrl: './bash.component.html',
  styleUrls: ['./bash.component.scss']
})
export class BashComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    const part2Btn = document.querySelector('#navBash2');
    if (part2Btn !== null) {
      part2Btn.addEventListener('click', () => {
        Swal.fire({
          backdrop: true,
          background: '#333',
          confirmButtonColor: 'rgb(33, 100, 116)',
          title: '<h2>More Coming Soon!</h2>',
          confirmButtonText: 'Ok',
          width: 500,
          position: 'center',
          html: '<h3>I will add part 2 eventually. For now I am focusing on getting my ' +
          'career started as I graduated this past May. I am keeping the home page ' +
          'updated with what I am currently getting into.</h3>',
          heightAuto: false,
          padding: 0,
          imageUrl: '../../assets/images/linux-256.png',
          imageHeight: 200,
        });
      })
    }

    const part3Btn = document.querySelector('#navBash3');
    if (part3Btn !== null) {
      part3Btn.addEventListener('click', () => {
        Swal.fire({
          backdrop: true,
          background: '#333',
          confirmButtonColor: 'rgb(33, 100, 116)',
          title: '<h2>More Coming Soon!</h2>',
          confirmButtonText: 'Ok',
          width: 500,
          position: 'center',
          html: '<h3>I will add part 3 eventually. For now I am focusing on getting my ' +
          'career started as I graduated this past May. I am keeping the home page ' +
          'updated with what I am currently getting into.</h3>',
          heightAuto: false,
          padding: 0,
          imageUrl: '../../assets/images/linux-256.png',
          imageHeight: 200,
        });
      })
    }

    const cliBtn = document.querySelector('#navCLI');
    if (cliBtn !== null) {
      cliBtn.addEventListener('click', () => this.router.navigateByUrl("/cli"));
    }
  }
}
