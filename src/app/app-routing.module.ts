import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { CardinfoComponent } from './cardinfo/cardinfo.component';
import { AddressInfoComponent } from './addressinfo/addressinfo.component';

export const appRoutes: Routes = [
    {path: 'personalInfo', component: UserinfoComponent},
    {path: 'cardInfo', component: CardinfoComponent},
    {path: 'addressInfo', component: AddressInfoComponent},
    {path: '', redirectTo: '/personalInfo', pathMatch: 'full'},
    {path: '**', component: UserinfoComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
    exports: [RouterModule]

  })
  
  export class AppRoutingModule {}