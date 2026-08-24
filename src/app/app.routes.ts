import { NotFound } from '@/app/components/not-found/not-found';
import { ROUTE_PATHS, ROUTE_SEGMENTS } from '@/app/core/routes/route-paths.const';
import { DefaultLayout } from '@/app/layouts/default-layout/default-layout';
import { BindingPage } from '@/app/pages/binding-page/binding-page';
import { CalculatorPage } from '@/app/pages/calculator-page/calculator-page';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      {
        path: `${ROUTE_PATHS.CALCULATOR}`,
        component: CalculatorPage,
      },
      {
        path: `${ROUTE_PATHS.BINDING}`,
        component: BindingPage,
      },
      {
        path: 'apps',
        children: [
          {
            path: `${ROUTE_SEGMENTS.HOTEL_BOOKING}`,
            loadComponent: () =>
              import('./pages/apps/hotel-booking-page/hotel-booking-page').then(
                (m) => m.HotelBookingPage,
              ),
          },
        ],
      },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
