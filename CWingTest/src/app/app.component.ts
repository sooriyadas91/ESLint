import { Component } from '@angular/core';

Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  total: number = 100;
  page1: number = 10
  array = []
  title = 'CWingTest';
  getCount() {
    var b: any
    var a: any = this.total / this.page1
    return Math.trunc(a);
    this.array.forEach(element => {
      var c = 10
    });
  }
}

