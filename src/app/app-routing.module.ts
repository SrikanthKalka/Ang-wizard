import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserinfoComponent } from './userinfo/userinfo.component';

export const appRoutes: Routes = [
    {path: 'personalInfo', component: UserinfoComponent},
    {path: '', redirectTo: '/personalInfo', pathMatch: 'full'},
    {path: '**', component: UserinfoComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
    exports: [RouterModule]

  })
  
  export class AppRoutingModule {}