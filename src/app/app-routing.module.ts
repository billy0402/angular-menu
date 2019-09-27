import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './components/page/page.component';
import { IndexComponent } from './components/index/index.component';
import { RoyalComponent } from './components/royal/royal.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { CertComponent } from './components/cert/cert.component';

const routes: Routes = [
  { path: '', redirectTo: 'page', pathMatch: 'full' },
  {
    path: 'page', component: PageComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: IndexComponent },
      { path: 'royal', component: RoyalComponent },
      { path: 'royal/:storeid', component: RoyalComponent },
      { path: 'order-detail', component: OrderDetailComponent },
      { path: 'order-detail/:storeid/:typeid/:itemid', component: OrderDetailComponent },
      { path: 'cert', component: CertComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
