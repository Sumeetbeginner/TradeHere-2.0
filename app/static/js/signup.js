function validateEmail(email) {

    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {

    return password.length >= 8;
}

function validateName(name) {

    return name.length >= 2;
}

function validateGender(gender) {

    return gender == "Male" || gender == "Female";
}

function signupUser() {
    
    if(!validateName(document.getElementById("inpName").value)){
        alert("⚠️ Name Should contain more than 3 Characters")
    }
    else if (!validateEmail(document.getElementById("inpEmail").value)) {

        alert("Kindly Enter Correct Email Format ⚠️");

    }
    else if(!validatePassword(document.getElementById("inpPass").value)) {

        alert("Password Should Contain more than 8 characters ⚠️");

    }
    else if(!validateGender(document.getElementById("inpGender").value)){
        alert("⚠️ Kindly Select Gender")
    }
    else{
        // Sign up Logic
        
    }
}
