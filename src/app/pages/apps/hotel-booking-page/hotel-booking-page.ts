import { Rooms } from '@/app/components/rooms/rooms';
import { rooms } from '@/app/pages/apps/hotel-booking-page/data/rooms';
import { IRoom } from '@/app/pages/apps/hotel-booking-page/interfaces/IRoom';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hotel-booking-page',
  imports: [Rooms],
  templateUrl: './hotel-booking-page.html',
})
export class HotelBookingPage {
  availableRooms = signal<number>(2);
  favorites = signal<number>(2);
  searchQuery = signal<string>('');

  rooms_data = rooms;
  filtered_rooms = signal<IRoom[]>(this.rooms_data);
}
