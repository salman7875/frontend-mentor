import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  pName = '';
  pEmail = '';
  pMobile = '';
  pDOB = '';
  dName = '';
  dEmail = '';
  dMobile = '';

  showDOB = false;

  constructor() {}

  ngOnInit() {}

  toggleDOB() {
    this.showDOB = !this.showDOB;
  }

  selectDate(value: any) {
    console.log(value);
    this.pDOB = value
    this.showDOB = false
  }

  registerUser() {
    const formData = {
      pName: this.pName,
      pEmail: this.pEmail,
      pMobile: this.pMobile,
      pDOB: this.pDOB,
      dName: this.dName,
      dEmail: this.dEmail,
      dMobile: this.dMobile,
    };

    console.log(formData);
  }
}
