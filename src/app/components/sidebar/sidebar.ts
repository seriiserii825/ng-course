import { SidebarDropdown } from '@/app/components/sidebar-dropdown/sidebar-dropdown';
import { ROUTE_PATHS } from '@/app/core/routes/route-paths.const';
import { Component } from '@angular/core';
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
