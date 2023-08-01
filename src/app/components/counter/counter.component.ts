import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter: number = 0;

  readonly setCounter = (value: number) => (this.counter += value);
  readonly resetCounter = () => (this.counter = 0);
}
