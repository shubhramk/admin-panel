import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from '../../modules/login/login.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes  = [
{
  path: '',
  component: LoginComponent
},
{
  path: 'login',
  component: LoginComponent,
}
//,
// {
//   path: 'dashboard',
//   component: DashboardComponent,
//   canActivateChild: [AuthGuard],
//   children : [
//         {
//               path: 'schedule',
//               loadChildren: 'app/modules/schedule/schedule.module#ScheduleModule',
//               data: { menuID:"schedule" ,routeID: 'scheduleList' }
//           },
//
//           {
//               path: 'cron',
//               loadChildren: 'app/modules/cron/cron.module#CronModule',
//               data: { menuID:"cron" ,routeID: 'cron_list' }
//           },
//           { path: '**', component: LoginComponent }
//   ],
// }

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
   useHash:true,
   preloadingStrategy: PreloadAllModules
});
