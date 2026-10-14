


function validdateValue(){

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('passowrd').value;
    var confirm = document.getElementById('co-password').value;
    var result = document.getElementById('result');
    result.setAttribute("class","alert theme-danger text-center d-block fg-black");
    result.style.backgroundColor="#f7d6d9"
    
    if(name  == "" && email == "" && password == "" && confirm == ""){
        result.innerHTML="Enter data";
        return false;
    }
    else if (name.length < 5 || name.length > 15) {
        result.innerHTML = "Enter 5-15 charcter in Name";
        return false;
    }
    else if (email.indexOf('@', 1) == -1 || email.indexOf('.com', 1) == -1) {
        result.innerHTML = "Enter valid email";
        return false;
    }
    else if (password.length <8 ) {
        result.innerHTML = "Weak Passord";
        return false;
    }
    else if(password != confirm){
        result.innerHTML = "match password";
        return false;
    }

}

// let sucess = document.getElementById('succes');
// sucess.innerHTML=email.value;