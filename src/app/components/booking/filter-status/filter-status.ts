import { BtnShared } from '@/app/shared/btn-shared/btn-shared';
import { Component, signal } from '@angular/core';

interface IFilterStatus {
  id: number;
  label: string;
}

@Component({
  imports: [BtnShared],
  selector: 'app-filter-status',
  templateUrl: './filter-status.html',
})
export class FilterStatus {
  currentIndex = signal(0);

  filterStatusOptions: IFilterStatus[] = [
    { id: 0, label: 'All' },
    { id: 1, label: 'Available' },
    { id: 2, label: 'Unavailable' },
  ];

  onFilterStatusChange(index: number): void {
    this.currentIndex.set(index);
  }
}
