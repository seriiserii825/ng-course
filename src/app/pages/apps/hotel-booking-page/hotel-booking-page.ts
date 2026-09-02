import { SearchBooking } from '@/app/components/booking/search-booking/search-booking';
import { Rooms } from '@/app/components/rooms/rooms';
import { rooms } from '@/app/pages/apps/hotel-booking-page/data/rooms';
import { IRoom } from '@/app/pages/apps/hotel-booking-page/interfaces/IRoom';
import { ISelectOption } from '@/app/shared/select-shared/interfaces/ISelectOption';
import { SelectShared } from '@/app/shared/select-shared/select-shared';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotel-booking-page',
  imports: [Rooms, SearchBooking, SelectShared, FormsModule],
  templateUrl: './hotel-booking-page.html',
})
export class HotelBookingPage {
  searchQuery = signal<string>('');
  onSearchQueryChange(value: string) {
    this.searchQuery.set(value);
    this.filtered_rooms.set(
      this.rooms_data.filter((room) => room.name.toLowerCase().includes(value.toLowerCase())),
    );
  }
  onClearQuery() {
    this.searchQuery.set('');
    this.filtered_rooms.set(this.rooms_data);
  }

  rooms_data = rooms;
  filtered_rooms = signal<IRoom[]>(this.rooms_data);

  availableRooms = computed(() => this.filtered_rooms().filter((room) => room.available).length);
  favorites = computed(() => this.filtered_rooms().filter((room) => room.favorite).length);

  capacities = computed(() => {
    const capacities = this.filtered_rooms().map((room) => room.capacity);
    return Array.from(new Set(capacities)).sort((a, b) => a - b);
  });

  capacityOptions = computed(() =>
    this.capacities().map((capacity) => ({
      value: capacity,
      label: capacity.toString(),
    })),
  );

  selected_capacity_option = signal<ISelectOption | undefined>(this.capacityOptions()[0]);
}
