import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { IndexComponent } from './components/index/index.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RoyalComponent } from './components/royal/royal.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { CertComponent } from './components/cert/cert.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    IndexComponent,
    NavBarComponent,
    RoyalComponent,
    OrderDetailComponent,
    CertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
