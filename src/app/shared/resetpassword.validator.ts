import { AbstractControl } from '@angular/forms';


export function ResetPasswordValidator(control : AbstractControl):{[key : string] : boolean} | null {

    const newPassword = control.get('newPassword');
    const confirmNewPassword = control.get('confirmNewPassword');

    if(newPassword.pristine || confirmNewPassword.pristine){
        return null;
    }
    console.log("newPassword && confirmNewPassword && newPassword.value !== confirmNewPassword.value ? {'misMatch':true} : null") 

    return newPassword && confirmNewPassword && newPassword.value !== confirmNewPassword.value ? {'misMatch':true} : null;
}
    