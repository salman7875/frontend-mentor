import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugar',
  templateUrl: './sugar.component.html',
  styleUrls: ['./sugar.component.scss'],
})
export class SugarComponent implements OnInit {
  sugarRanges: any[] = [];
  startRange = '';
  endRange = '';

  constructor() {}

  ngOnInit() {
    this.sugarRanges = [
      { id: 1, startRange: 0, endRange: 90 },
      { id: 2, startRange: 91, endRange: 200 },
      { id: 3, startRange: 201, endRange: 250 },
      { id: 4, startRange: 251, endRange: 300 },
      { id: 5, startRange: 301, endRange: 350 },
    ];
  }

  addSugarRange() {
    let flag = true;
    this.sugarRanges.forEach((cur) => {
      if (
        this.startRange > cur.endRange &&
        this.endRange > this.startRange &&
        flag
      ) {
        this.sugarRanges.push({
          id: this.sugarRanges.length + 1,
          startRange: this.startRange,
          endRange: this.endRange,
        });
        flag = false;
      }
    });
    console.log(this.sugarRanges);
  }
}
