import { CustomerSystemComponent } from './customer-system/customer-system.component';
import { ReportComponent } from './report/report.component';
import { PakingSystemComponent } from './paking-system/paking-system.component';
import { SystemComponent } from './system/system.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', redirectTo: 'pages/system', pathMatch: 'full' },
  { path: 'pages', component: PagesComponent,
    children: [
      { path: 'system', component: SystemComponent },
      { path: 'paking-system', component: PakingSystemComponent },
      { path: 'report', component: ReportComponent },
      { path: 'customer-system', component: CustomerSystemComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
