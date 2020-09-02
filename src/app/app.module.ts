import { PagesModule } from './pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ServiceRegisterComponent } from './service-register/service-register.component';
import { HeaderComponent } from './shared/comps/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    UserRegisterComponent,
    ServiceRegisterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
