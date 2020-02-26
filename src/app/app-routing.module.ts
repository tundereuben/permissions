import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PermissionDetailsComponent } from './permission-details/permission-details.component';
import { PermissionAddComponent } from './permission-add/permission-add.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { NoAuthGuard } from './no-auth.guard';
import { PrimeDashboardComponent } from './prime-dashboard/prime-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/prime-dashboard', pathMatch: 'full',  canActivate: [AuthGuard]},
  { path: 'detail/:id', component: PermissionDetailsComponent, canActivate: [AuthGuard]},
  { path: 'add', component: PermissionAddComponent, canActivate: [AuthGuard]},
  { path: 'edit/:id', component: PermissionAddComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent,  canActivate: [NoAuthGuard] },
  { path: 'prime-dashboard', component: PrimeDashboardComponent,  canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
