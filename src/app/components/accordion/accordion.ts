import { Component, input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.html',
})
export class Accordion {
  isOpen: boolean = false;

  title = input<string>('');

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
}
