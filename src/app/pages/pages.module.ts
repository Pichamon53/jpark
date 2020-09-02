import { SidebarComponent } from './../shared/comps/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SystemComponent } from './system/system.component';
import { PakingSystemComponent } from './paking-system/paking-system.component';
import { ReportComponent } from './report/report.component';
import { CustomerSystemComponent } from './customer-system/customer-system.component';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ServiceRegisterComponent } from './service-register/service-register.component';
@NgModule({
  declarations: [
    PagesComponent,
    SidebarComponent,
    SystemComponent,
    PakingSystemComponent,
    ReportComponent,
    CustomerSystemComponent,
    LoginComponent,
    UserRegisterComponent,
    ServiceRegisterComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class PagesModule { }
