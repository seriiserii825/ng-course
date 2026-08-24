import { Component } from '@angular/core';
import { ROUTE_PATHS } from '../../core/routes/route-paths.const';
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
      url: ROUTE_PATHS.HOME,
    },
    {
      title: 'Binding',
      url: ROUTE_PATHS.BINDING,
    },
    {
      title: 'Apps',
      url: ROUTE_PATHS.APPS,
      children: [
        {
          title: 'Hotel Booking',
          url: ROUTE_PATHS.HOTEL_BOOKING,
        },
      ],
    },
  ];
}
