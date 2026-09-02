import { SearchBooking } from '@/app/components/booking/search-booking/search-booking';
import { Preloader } from '@/app/components/preloader/preloader';
import { Rooms } from '@/app/components/rooms/rooms';
import { rooms } from '@/app/pages/apps/hotel-booking-page/data/rooms';
import { IRoom } from '@/app/pages/apps/hotel-booking-page/interfaces/IRoom';
import { ISelectOption } from '@/app/shared/select-shared/interfaces/ISelectOption';
import { SelectShared } from '@/app/shared/select-shared/select-shared';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotel-booking-page',
  imports: [Rooms, SearchBooking, SelectShared, FormsModule, Preloader],
  templateUrl: './hotel-booking-page.html',
})
export class HotelBookingPage {
  searchQuery = signal<string>('');
  onSearchQueryChange(value: string) {
    this.searchQuery.set(value);
    this.startLoading();
  }
  onClearQuery() {
    this.searchQuery.set('');
    this.startLoading();
  }

  onCapacityChange(option: ISelectOption) {
    this.selected_capacity_option.set(option);
    this.startLoading();
  }

  isLoading = signal<boolean>(false);
  private startLoading() {
    this.isLoading.set(true);
    setTimeout(() => this.isLoading.set(false), 600);
  }

  rooms_data = rooms;

  capacities = computed(() => {
    const capacities = this.rooms_data.map((room) => room.capacity);
    return Array.from(new Set(capacities)).sort((a, b) => a - b);
  });

  capacityOptions = computed(() => [
    { value: 0, label: 'All' },
    ...this.capacities().map((capacity) => ({
      value: capacity,
      label: capacity.toString(),
    })),
  ]);

  selected_capacity_option = signal<ISelectOption | undefined>(this.capacityOptions()[0]);

  filtered_rooms = computed<IRoom[]>(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const capacity = this.selected_capacity_option()?.value ?? 0;
    return this.rooms_data.filter(
      (room) =>
        room.name.toLowerCase().includes(query) && (capacity === 0 || room.capacity === capacity),
    );
  });

  availableRooms = computed(() => this.filtered_rooms().filter((room) => room.available).length);
  favorites = computed(() => this.filtered_rooms().filter((room) => room.favorite).length);
}
