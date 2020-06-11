import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
 
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';


import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PlanSubscriptionComponent } from './plan-subscription/plan-subscription.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { CreateReportComponent } from './create-report/create-report.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    
    SigninComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    UserProfileComponent,
    PlanSubscriptionComponent,
    TransactionHistoryComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    CreateReportComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    
    MatMenuModule,
    FlexLayoutModule,
    
    
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',

    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
