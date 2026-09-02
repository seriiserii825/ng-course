import { FilterStatus } from '@/app/components/booking/filter-status/filter-status';
import { SearchBooking } from '@/app/components/booking/search-booking/search-booking';
import { Preloader } from '@/app/components/preloader/preloader';
import { Rooms } from '@/app/components/rooms/rooms';
import { HotelBookingStore } from '@/app/pages/apps/hotel-booking-page/hotel-booking.store';
import { SelectShared } from '@/app/shared/select-shared/select-shared';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotel-booking-page',
  imports: [Rooms, SearchBooking, SelectShared, FormsModule, Preloader, FilterStatus],
  templateUrl: './hotel-booking-page.html',
  providers: [HotelBookingStore],
})
export class HotelBookingPage {
  protected store = inject(HotelBookingStore);
}
