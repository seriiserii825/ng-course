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
      url: '/home',
    },
    {
      title: 'Binding',
      url: '/binding',
    },
    {
      title: 'Services',
      url: '/services',
      children: [
        {
          title: 'Web Development',
          url: '/services/web-development',
        },
        {
          title: 'Mobile Development',
          url: '/services/mobile-development',
        },
      ],
    },
    {
      title: 'Contact',
      url: '/contact',
    },
  ];
}
