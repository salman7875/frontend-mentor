import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'sugar',
    loadChildren: () =>
      import('./sugar/sugar.module').then((m) => m.SugarModule),
  },
  {
    path: 'event',
    loadChildren: () =>
      import('./events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'insulin',
    loadChildren: () =>
      import('./insulin/insulin.module').then((m) => m.InsulinModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
