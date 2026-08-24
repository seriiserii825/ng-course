import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hotel-booking-page',
  imports: [],
  templateUrl: './hotel-booking-page.html',
})
export class HotelBookingPage {
  availableRooms = signal<number>(0);
  favorites = signal<number>(0);
  searchQuery = signal<string>('');
}
