// Ensures password is unique and fits requirements, and email is valid for account creation

const PASS_LENGTH = 8;
var errors = 0;
var businessLogic = require('../../../services/business_logic');
var bl = businessLogic.createBL;

function validateAccountCreation(){
    var email = document.getElementById("inputEmail4").value;
    var password1 = document.getElementById("inputPassword1").value;
    var password2 = document.getElementById("inputPassword2").value;

    //validate password
    checkPasswordsMatch(password1,password2);
    if(checkErrors()){return;}
    checkPasswordContents(password1);
    if(checkErrors()){return;}

    //check email is unique
    checkUniqueEmail(email);
    if(checkErrors()){return;}
    bl.createAccount(email,password1);
}


function checkUniqueEmail(email){
    if(bl.checkEmail((email)) === false){
        errors = errors + 1;
        document.getElementById('emailError').innerHTML = "Email is already in use";
    }
}

function checkPasswordsMatch(password1,password2){
    if(!(password1.localeCompare(password2) === 0)){
        document.getElementById('passError').innerHTML = "Passwords do not match";
        errors = errors + 1;
    }
}
function checkPasswordContents(password){
    var isValid = true;
    var reason = "";
    var specCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    var numPattern = /[0-9]/;
    var capitolPattern = /[A-Z]/;
    if(password.match(specCharPattern) === null){
        isValid = false;
        reason = reason + "Password must have at least one special character<br>";
    }
    if(password.match(numPattern) === null){
        isValid = false;
        reason = reason + "Password must contain at least one number<br>";
    }
    if(password.match(capitolPattern) === null){
        isValid = false;
        reason = reason + "Password must contain at least one capitol letter<br>";
    }
    if(password.length < PASS_LENGTH){
        isValid = false;
        reason = reason + "Password must be "+ PASS_LENGTH +" characters or longer<br>";
    }
    if(isValid === false){
        document.getElementById('passError').innerHTML = reason;
    }
}

function checkErrors(){
    if(errors > 0){
        return true;
    }
}

