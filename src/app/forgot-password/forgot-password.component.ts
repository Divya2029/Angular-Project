import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';
declare const forgotUser : any;
declare const validateOtp : any;


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm : FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService,private router:Router) {}
    ngOnInit() {
    this.forgotPasswordForm = this.fb.group({
      email : ['' , [Validators.required, Validators.email]] ,
      otp : ['']
      
    });
}

    get email(){  
      return this.forgotPasswordForm.get('email'); 
     }

     public emailVal : Boolean;
     public showMsg(){
       this.emailVal=forgotUser();
       return this.emailVal;
       }

      
      public serverResponse : boolean = true;
      public emailVerify: boolean
      showSuccess() {
       
        if((this.forgotPasswordForm.value != 0) && (this.serverResponse == true)){
           
          this.toastr.success("OTP have sent to your email");
          this.emailVerify=true;

        } else if((this.forgotPasswordForm.value != 0) && (this.serverResponse != true)) 
        {
          this.toastr.warning("Unable to sent OTP to your email");
          this.emailVerify=false;
       }
       
      }

      public otpVal: Boolean=false;
      otpMsg(){
        console.log("Iam inside class");
       this.otpVal= validateOtp();
       return this.otpVal;
      }

      /*onClick(){
        if(this.otpVal == false){
          this.router.navigateByUrl("/reset-password");
        }else{
         this.router.navigateByUrl("/forgot-password");
        }

      }*/
      

       
          
}