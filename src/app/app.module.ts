import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { SidebarComponent } from './shell/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { SalesComponent } from './sales/sales.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { HomeComponent } from './home/home.component';
import { NgChartsModule } from 'ng2-charts';
import { CaptureComponent } from './master/capture/capture.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NotificationComponent } from './master/notification/notification.component';
import { environment } from 'src/environments/environment';
import { UsersListsComponent } from './user/users-lists/users-lists.component';
import { MatTableModule } from '@angular/material/table';
import { UsersComponent } from './user/users/users.component';
import { UserModule } from './user/user.module';
import { DynamicChartComponent } from './home/dynamic-chart/dynamic-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    SalesComponent,
    PurchaseComponent,
    HomeComponent,
    CaptureComponent,
    NotificationComponent,
    UsersComponent,
    DynamicChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    MatTableModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
