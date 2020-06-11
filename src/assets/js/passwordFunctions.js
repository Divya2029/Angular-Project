function validateOtp(){
    console.log("inside forgot password function");
    let invalidOtp = false;
    
    var otp =1234;
    var userOtp=document.getElementById("otp").value;

    /*var url="http://localhost:4200/reset-password";*/
     if(otp == userOtp){
        invalidOtp=false;
        /*window.open(url);*/
    }else{
        invalidOtp=true;
        }
    
       console.log("invalidOtp"+invalidOtp);
       return invalidOtp;
  
}

/*Password should not get match with old passwords*/

function validatePswd(){
    console.log("inside reset password function");
    let invalidPassword = false;
    
    var password ="divya1";
    var newPassword=document.getElementById("newPassword").value;

     if(password == newPassword){
        invalidPassword=false;
        
    }else{
        invalidPassword=true;
        }
    
       console.log("invalidPassword"+invalidPassword);
       return invalidPassword;
  
}


    