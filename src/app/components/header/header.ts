import { Component } from '@angular/core';
import { IHeaderMenuItem } from './interfaces/IHeaderMenuItem';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ROUTE_PATHS } from '../../core/routes/route-paths.const';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
})
export class Header {
  menu_items: IHeaderMenuItem[] = [
    { label: 'Home', path: ROUTE_PATHS.HOME },
    { label: 'Calculator', path: ROUTE_PATHS.CALCULATOR },
  ];
}
