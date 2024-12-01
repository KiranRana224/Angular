import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './shell/shell.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { SalesComponent } from './sales/sales.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { HomeComponent } from './home/home.component';

// const routes: Routes = [
//   {path:'',component:LoginComponent},
//   {path:'login',component:LoginComponent},
//   {path:'register',component:RegisterComponent},
//   {path:'home/sales',component:SalesComponent,pathMatch:'full'},
//   {path:'purchase',component:PurchaseComponent,pathMatch:'full'},
//   {path:'home',component:ShellComponent,pathMatch:'full'},
// ];

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: '',
    component: ShellComponent, // Shell layout for authenticated users
    children: [
      { path: 'sales', component: SalesComponent },
      { path: 'purchase', component: PurchaseComponent },
      {path:'home',component:HomeComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
