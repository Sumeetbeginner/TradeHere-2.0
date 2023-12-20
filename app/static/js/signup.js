const firebaseConfig = {
    apiKey: "AIzaSyAjU-DJXpGMdPI-wf0cM8SWNcP_h4NeSQw",
    authDomain: "traderhere-18690.firebaseapp.com",
    projectId: "traderhere-18690",
    storageBucket: "traderhere-18690.appspot.com",
    messagingSenderId: "417776811155",
    appId: "1:417776811155:web:07e8057c4d445841d1a166",
    measurementId: "G-CDEN0SSKMC"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
const analytics = firebase.analytics();

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
        let email = document.getElementById("inpEmail").value;
        let password = document.getElementById("inpPass").value;
        let name = document.getElementById("inpName").value;
        let gender = document.getElementById("inpGender").value;
        // Sign up Logic
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) =>{
            const user = userCredential.user;

            firebase.database().ref('user/' + user.uid).set({
                email,
                name,
                gender,

            });
            alert("✅ User Registered Successfully!");
        })
        .catch((error) =>{
            const errorMessage = error.message;
            alert("Error : " + errorMessage );
        })
    }
}
