import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ResetPasswordValidator } from '../shared/resetpassword.validator';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
declare const validatePswd : any;




@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm : FormGroup;
  public users = [];
  public errorMsg: any;


  constructor(private fb: FormBuilder, private toastr: ToastrService, private _userService: UserService) {}
    ngOnInit() {
    this.resetPasswordForm = this.fb.group({
      newPassword:['',[Validators.required, Validators.pattern("^(?=.*[0-9]).{4,8}$")]], 
      confirmNewPassword: ['']
      }, {validator : ResetPasswordValidator });

      /*this._userService.getUsers()
              .subscribe(data => this.users = data,
                error=> this.errorMsg = error);
     
                /*console.log(JSON.stringify(this.users));*/
                /*console.log(this.users);   */   
      
    }

    
     get newPassword(){  
      return this.resetPasswordForm.get('newPassword'); 
     }
     get confirmNewPassword(){  
      return this.resetPasswordForm.get('confirmNewPassword'); 
     }

     public resetPswdVal: Boolean = true;
      resetPswdMsg(){
        console.log("Iam inside reset Password");
       this.resetPswdVal= validatePswd();
       return this.resetPswdVal;
      }

     showSuccess() {
      if(this.resetPasswordForm.value != 0){
        this.toastr.success("Reset Password is Successful");
      } else {
        this.toastr.warning("Reset Password failed");
     }}

     
     

}
