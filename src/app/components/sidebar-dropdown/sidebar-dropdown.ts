import { Component, computed, input, signal } from '@angular/core';
import { ISidebarDropdownItem } from '../sidebar/interfaces/ISidebarDropdownItem';

@Component({
  selector: 'app-sidebar-dropdown',
  imports: [],
  templateUrl: './sidebar-dropdown.html',
})
export class SidebarDropdown {
  item = input.required<ISidebarDropdownItem>();
  children = computed(() => this.item().children || []);
  isOpen = signal(false);
  toggleOpen() {
    this.isOpen.set(!this.isOpen());
  }
}
