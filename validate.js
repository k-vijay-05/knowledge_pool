function validate(){ 
    var num=document.myform.number.value; 
    if (isNaN(num)){ 
    document.getElementById("numloc").innerHTML="Enter Numeric value only"; 
    
    return false; 
    }
    else{ 
    return true; 
    } 
    } 
    
    function pass_Validate() {
    var password = document.getElementById("txtPassword").value;
    var confirmPassword = document.getElementById("txtConfirmPassword").value;
    if (password != confirmPassword) {
    document.getElementById("pass").innerHTML="Password is not Matching";
    return false;
    }
    else{ 
    return true; 
    } 
    }