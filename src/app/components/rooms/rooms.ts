import { Room } from '@/app/components/room/room';
import { HotelBookingStore } from '@/app/pages/apps/hotel-booking-page/hotel-booking.store';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-rooms',
  imports: [Room],
  templateUrl: './rooms.html',
})
export class Rooms {
  protected store = inject(HotelBookingStore);
}
