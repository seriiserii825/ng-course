import { Component } from '@angular/core';
import { SidebarDropdown } from '../sidebar-dropdown/sidebar-dropdown';
import { ISidebarDropdownItem } from './interfaces/ISidebarDropdownItem';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarDropdown],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  sidebarItems: ISidebarDropdownItem[] = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Binding',
      url: '/binding',
    },
    {
      title: 'Apps',
      url: '/apps',
      children: [
        {
          title: 'Hotel Booking',
          url: '/apps/hotel-booking',
        },
      ],
    },
    {
      title: 'Contact',
      url: '/contact',
    },
  ];
}
