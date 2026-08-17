import { Component } from '@angular/core';
import { Increment } from '../../components/increment/increment';
import { ToggleImage } from '../../components/toggle-image/toggle-image';

@Component({
  selector: 'app-binding-page',
  imports: [Increment, ToggleImage],
  templateUrl: './binding-page.html',
})
export class BindingPage {}
