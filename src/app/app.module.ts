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
import { LinechartComponent } from './home/linechart/linechart.component';
import { BarchartComponent } from './home/barchart/barchart.component';
import { PiechartComponent } from './home/piechart/piechart.component';
import { DoubnutchartComponent } from './home/doubnutchart/doubnutchart.component';
import { RadarchartComponent } from './home/radarchart/radarchart.component';
import { PolarchartComponent } from './home/polarchart/polarchart.component';
import { BubblechartComponent } from './home/bubblechart/bubblechart.component';
import { ScatterchartComponent } from './home/scatterchart/scatterchart.component';
import { SalesModule } from './sales/sales.module';
import { MasterModule } from './master/master.module';

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
    LinechartComponent,
    BarchartComponent,
    PiechartComponent,
    DoubnutchartComponent,
    RadarchartComponent,
    PolarchartComponent,
    BubblechartComponent,
    ScatterchartComponent,
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
    SalesModule,
    MasterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
