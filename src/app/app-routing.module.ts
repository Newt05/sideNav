import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreAssetsComponent } from './core-assets/core-assets.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import { RequestFormComponent } from './request-form/request-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'coreAssets', component: CoreAssetsComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'request-form', component: RequestFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
