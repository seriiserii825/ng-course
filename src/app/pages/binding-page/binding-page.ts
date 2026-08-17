import { Component } from '@angular/core';
import { Increment } from '../../components/increment/increment';

@Component({
  selector: 'app-binding-page',
  imports: [Increment],
  templateUrl: './binding-page.html',
})
export class BindingPage {}
