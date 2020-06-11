/*===========================Regarding Login part Functions====================*/

/*Email Function*/
function validRegUser(){
    console.log("validreguser");
    let invalidUser = false;
    var email=document.getElementById("icon_email").value;
    console.log("email"+email);
      
    var user="divya123@gmail.com";
    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var emailValid = emailPattern.test(email);
    console.log("emailvalid"+emailValid);
    
    console.log(email.length === 0);
    console.log((email.length !== 0) && (email.localeCompare(user) === -1) && (emailValid === true));

    
    if(email.length === 0){
      invalidUser = false;
      } else if((email.length !== 0) && (email.localeCompare(user) === -1) && (emailValid === true)){
      invalidUser = true;
      }

      
      disableButton();
  
    console.log("invaliduser"+invalidUser);
    return invalidUser;
    }

 /*Password function*/
    
function checkRegPswd(){
  console.log("inside password function");
  var invalidPswd = false;
  
  var password=document.getElementById("icon_password").value;
  console.log("password"+password);
    
  var regPswd="divya1";
  console.log(password.length !== 0);
  console.log(typeof password);
  console.log(typeof regPswd);
  console.log(password.localeCompare(regPswd));
  console.log(password.localeCompare(regPswd) != 0);
  
  
  if(password.length === 0){
    invalidPswd=false;
    /*button.disabled = false;*/
  } else if((password.length !== 0) && (password.localeCompare(regPswd) != 0)){
    invalidPswd=true;
    /*button.disabled = true;*/
  }

  disableButton();
  
  console.log("invalidPswd"+invalidPswd);
  return invalidPswd;
  }

  /*Button Disable function*/

  function disableButton(){

    var email=document.getElementById("icon_email").value;
    var user="divya123@gmail.com";
    
    var password=document.getElementById("icon_password").value;
    var regPswd="divya1";
  
    const button = document.getElementById("btn");
    if((email.localeCompare(user) != 0) || (password.localeCompare(regPswd) != 0)){
      button.disabled = true;
    } else{
      button.disabled = false;
    }
  }

  /*========================Regarding ForgotPassword Page====================*/
  function forgotUser(){

    console.log("validreguser");
    let invalidUser = false;
    var email=document.getElementById("icon_email").value;
    console.log("email"+email);
      
    var user="divya123@gmail.com";
    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var emailValid = emailPattern.test(email);
    console.log("emailvalid"+emailValid);
    
    console.log(email.length === 0);
    console.log((email.length !== 0) && (email.localeCompare(user) === -1) && (emailValid === true));

    
    if(email.length === 0){
      invalidUser = false;
      } else if((email.length !== 0) && (email.localeCompare(user) === -1) && (emailValid === true)){
      invalidUser = true;
      }

      fgtButton();
      
    console.log("invaliduser"+invalidUser);
    return invalidUser;
    }

/*Forgot password disable button*/

    function fgtButton(){
      var email=document.getElementById("icon_email").value;
      var user="divya123@gmail.com";

      const button = document.getElementById("btn");
    if(email.localeCompare(user) != 0){
      button.disabled = true;
    } else{
      button.disabled = false;
    }

    }

    

  
    

    