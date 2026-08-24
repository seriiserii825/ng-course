import { Component, computed, input, signal } from '@angular/core';
import { ISidebarDropdownItem } from '../sidebar/interfaces/ISidebarDropdownItem';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-dropdown',
  imports: [RouterLink],
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
