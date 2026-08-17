import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-increment',
  imports: [],
  templateUrl: './increment.html',
})
export class Increment {
  count = signal(0);

  increment(value: number) {
    if (this.count() >= 0 && value > 0) {
      this.count.set(this.count() + value);
    } else if (this.count() > 0 && value < 0) {
      this.count.set(this.count() + value);
    }
  }
}
