import { Component } from '@angular/core';
import { Increment } from '../../components/increment/increment';
import { ToggleImage } from '../../components/toggle-image/toggle-image';
import { CreateTask } from '../../components/create-task/create-task';

@Component({
  selector: 'app-binding-page',
  imports: [Increment, ToggleImage, CreateTask],
  templateUrl: './binding-page.html',
})
export class BindingPage {}
