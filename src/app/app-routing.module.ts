import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PlanSubscriptionComponent } from './plan-subscription/plan-subscription.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { CreateReportComponent } from './create-report/create-report.component';


const routes: Routes = [
  /*{
    path: 'home',
    component: HomeComponent,
    },*/
  {
    path: 'signup',
    component: UserComponent,
    children:[ {path:"", component: SignupComponent}] },

    {
      path: 'login',
      component: UserComponent,
      children:[ {path:"",component:SigninComponent
    }]},

    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },

    {
      path: 'reset-password',
      component: ResetPasswordComponent
    },

    {
      path:'home',
      component:HomeComponent,
      children:[ {path:"",component:HeaderComponent}]

    },
    
    {
      path:'user-profile',
      component:UserProfileComponent
    },
    {
      path:'plan-subscription',
      component:PlanSubscriptionComponent
    },
    {
      path:'transaction-history',
      component:TransactionHistoryComponent
    },
    {
      path:'contact',
      component:ContactComponent
    },
    
    {
      path:'create-report',
      component:CreateReportComponent
    },


    { path: '**', redirectTo :'/login', pathMatch:'full'
    }
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
