import { Component, input } from '@angular/core';
import { BtnShared } from '../../shared/btn-shared/btn-shared';
import { IRoom } from '@/app/pages/apps/hotel-booking-page/interfaces/IRoom';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-room',
  imports: [BtnShared, NgClass],
  templateUrl: './room.html',
})
export class Room {
  room = input<IRoom>();
}
