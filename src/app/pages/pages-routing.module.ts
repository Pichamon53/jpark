import { UserRegisterComponent } from './user-register/user-register.component';
import { ServiceRegisterComponent } from './service-register/service-register.component';
import { LoginComponent } from './login/login.component';
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
      { path: 'customer-system', component: CustomerSystemComponent },
      { path: 'login', component: LoginComponent },
      { path: 'user-register', component: UserRegisterComponent },
      { path: 'service-register', component: ServiceRegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
