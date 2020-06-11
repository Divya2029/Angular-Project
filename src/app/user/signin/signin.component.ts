import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
declare const validRegUser : any;
declare const checkRegPswd : any;



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm : FormGroup;
  hide=true;

  public users = [];
  public errorMsg: any;

  
  
 constructor(private fb: FormBuilder, private _userService: UserService) {}
    
   ngOnInit() {
    this.loginForm = this.fb.group({
      email : ['' , [Validators.required, Validators.email]],  
      password: ['']  
    });

    /*this._userService.getUsers()
            .subscribe(data => this.users = data,
             error=> this.errorMsg = error);*/
        
      }

    get email(){  
      return this.loginForm.get('email'); 
     }

     get password(){  
      return this.loginForm.get('password'); 
     }


     public emailVal : Boolean;
     public showEmailMsg(){
       /*console.log("inside class"+event.target.value);
         console.log("emailVal"+validRegUser(event));*/
       this.emailVal=validRegUser();
       /*console.log(this.emailVal);*/
       return this.emailVal;
       }

/*Password*/
       public pswdVal : Boolean;
       public showPswdMsg(){
        /*console.log("inside class"+event.target.value);*/

        this.pswdVal=checkRegPswd();
        /*console.log(this.pswdVal);*/
        return this.pswdVal;
        }
  } 
      
   
 