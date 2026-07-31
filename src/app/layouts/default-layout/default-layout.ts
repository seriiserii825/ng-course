import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../components/header/header';
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-default-layout',
  imports: [RouterOutlet, Header, Sidebar],
  templateUrl: './default-layout.html',
})
export class DefaultLayout {
  protected readonly currentYear = new Date().getFullYear();
}
