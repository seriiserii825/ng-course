import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-search-booking',
  templateUrl: './search-booking.html',
})
export class SearchBooking {
  searchQuery = input<string>('');
  searchQueryChange = output<string>();
  clearQuery = output<void>();
}
