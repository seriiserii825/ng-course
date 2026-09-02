import { HotelBookingStore } from '@/app/pages/apps/hotel-booking-page/hotel-booking.store';
import { Component, inject } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-search-booking',
  templateUrl: './search-booking.html',
})
export class SearchBooking {
  protected store = inject(HotelBookingStore);
}
