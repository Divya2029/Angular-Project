import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { PasswordValidator } from 'src/app/shared/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  registrationForm : FormGroup;
  hide=true;
  /*JsonArray : any =[];*/
constructor(private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({  
        firstName:['',[Validators.required]],
        lastName: ['',[Validators.required]],
        email: ['',[Validators.required, Validators.email]],  
        contactNumber:['',[Validators.required, Validators.pattern("(0/91)?[7-9][0-9]{9}")]],
        password:['',[Validators.required, Validators.pattern ("^(?=.*[0-9]).{4,8}$")]], 
        confirmPassword: ['']
      }, {validator : PasswordValidator });
      
    }

   get firstName(){  
      return this.registrationForm.get("firstName"); 
     }
   get lastName(){  
      return this.registrationForm.get("lastName");  
     }  
   get email(){  
        return this.registrationForm.get("email");  
      }  
   get contactNumber(){  
      return this.registrationForm.get("contactNumber");  
     }  
   get password(){  
        return this.registrationForm.get("password");  
    }  
   get confirmPassword(){  
        return this.registrationForm.get("confirmPassword");  
    }  

   showSuccess() {
    if(this.registrationForm.value != 0){
      this.toastr.success("Registration is Successful");
    } else {
      this.toastr.warning("Registration is failed");
   }}
  }



  
    
  
