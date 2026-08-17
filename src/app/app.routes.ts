import { Routes } from '@angular/router';
import { DefaultLayout } from './layouts/default-layout/default-layout';
import { CalculatorPage } from './pages/calculator-page/calculator-page';
import { NotFound } from './components/not-found/not-found';
import { BindingPage } from './pages/binding-page/binding-page';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      {
        path: 'calculator',
        component: CalculatorPage,
      },
      {
        path: 'binding',
        component: BindingPage,
      },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
