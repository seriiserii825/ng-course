import { Room } from '@/app/components/room/room';
import { IRoom } from '@/app/pages/apps/hotel-booking-page/interfaces/IRoom';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-rooms',
  imports: [Room],
  templateUrl: './rooms.html',
})
export class Rooms {
  rooms = input<IRoom[]>([]);
}
