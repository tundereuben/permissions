import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AppModule } from '../app.module';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';

import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PermissionDetailsComponent } from '../permission-details/permission-details.component';
import { PermissionAddComponent } from '../permission-add/permission-add.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../http/auth.service';
import { AuthInterceptor } from '../http/auth.interceptor';
import { AuthGuard } from '../auth.guard';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoAuthGuard } from '../no-auth.guard';
import { PrimeDashboardComponent } from '../prime-dashboard/prime-dashboard.component';

import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
