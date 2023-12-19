

function validateEmail(email) {

    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {

    return password.length >= 8;
}

function loginUser() {
    if (!validateEmail(document.getElementById("inpEmail").value)) {

        alert("Kindly Enter Correct Email ⚠️");

    }
    else if(!validatePassword(document.getElementById("inpPass").value)) {

        alert("Password Should Contain more than 8 characters ⚠️");

    }
    else{
        // Log in Logic
    }
}
