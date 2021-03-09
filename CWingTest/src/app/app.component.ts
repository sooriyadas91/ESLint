import { Component } from '@angular/core';

Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
});

export class AppComponent {
  total = 100;
  page1 = 10;
  array = [];
  title = 'CWingTest';
  getCount() {
    const d = 10;
    let b: any;
    const a: any = this.total / this.page1;
    return Math.trunc(a);
    this.array.forEach((element) => {
      const c = 10;
      const e;
    });
  }
}
