import { rooms } from '@/app/pages/apps/hotel-booking-page/data/rooms';
import { IRoom } from '@/app/pages/apps/hotel-booking-page/interfaces/IRoom';
import { ISelectOption } from '@/app/shared/select-shared/interfaces/ISelectOption';
import { Injectable, computed, signal } from '@angular/core';

@Injectable()
export class HotelBookingStore {
  private roomsData = rooms;

  searchQuery = signal<string>('');
  isLoading = signal<boolean>(false);

  capacities = computed(() => {
    const capacities = this.roomsData.map((room) => room.capacity);
    return Array.from(new Set(capacities)).sort((a, b) => a - b);
  });

  capacityOptions = computed(() => [
    { value: 0, label: 'All' },
    ...this.capacities().map((capacity) => ({
      value: capacity,
      label: capacity.toString(),
    })),
  ]);

  selectedCapacityOption = signal<ISelectOption | undefined>(undefined);

  filteredRooms = computed<IRoom[]>(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const capacity = this.selectedCapacityOption()?.value ?? 0;
    return this.roomsData.filter(
      (room) =>
        room.name.toLowerCase().includes(query) && (capacity === 0 || room.capacity === capacity),
    );
  });

  availableRooms = computed(() => this.filteredRooms().filter((room) => room.available).length);
  favorites = computed(() => this.filteredRooms().filter((room) => room.favorite).length);

  constructor() {
    this.selectedCapacityOption.set(this.capacityOptions()[0]);
  }

  setSearchQuery(value: string) {
    this.searchQuery.set(value);
    this.startLoading();
  }

  clearQuery() {
    this.searchQuery.set('');
    this.startLoading();
  }

  setCapacity(option: ISelectOption) {
    this.selectedCapacityOption.set(option);
    this.startLoading();
  }

  private startLoading() {
    this.isLoading.set(true);
    setTimeout(() => this.isLoading.set(false), 600);
  }
}
