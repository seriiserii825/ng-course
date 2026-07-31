import { Component, computed, input } from '@angular/core';
import { ISidebarDropdownItem } from '../sidebar/interfaces/ISidebarDropdownItem';

@Component({
  selector: 'app-sidebar-dropdown',
  imports: [],
  templateUrl: './sidebar-dropdown.html',
})
export class SidebarDropdown {
  item = input.required<ISidebarDropdownItem>();
  children = computed(() => this.item().children || []);
  isOpen = computed(() => this.children().length > 0);
}
