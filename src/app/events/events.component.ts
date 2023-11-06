import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  breakfastTime = '';
  lunchTime = '';
  dinnerTime = '';
  showFixedTimeInput = false;
  fixedTime = '';

  constructor() {}

  ngOnInit() {}

  toggleFixedTime() {
    this.showFixedTimeInput = !this.showFixedTimeInput;
  }

  addEvents() {
    const formData = {
      breakfastTime: this.breakfastTime,
      lunchTime: this.lunchTime,
      dinnerTime: this.dinnerTime,
    };

    console.log(formData);
  }

  addFixedTime() {
    console.log(new Date(this.fixedTime));
    console.log(this.fixedTime);
  }
}
