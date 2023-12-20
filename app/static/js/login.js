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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {

    return password.length >= 8;
}


function loginUser() {
    if (!validateEmail(document.getElementById("inpEmail").value)) {

        alert("Kindly Enter Correct Email ⚠️");

    }
    else if (!validatePassword(document.getElementById("inpPass").value)) {

        alert("Password Should Contain more than 8 characters ⚠️");

    }
    else {
        // Log in Logic
        let email = document.getElementById("inpEmail").value;
        let password = document.getElementById("inpPass").value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                firebase.database().ref('users/' + user.uid).once('value')
                    .then((snapshot) => {

                        const userData = snapshot.val();

                        localStorage.setItem("CurrUserData", JSON.stringify(userData));

                    })
                    .then(() =>{

                        alert("✅ Login Successfully!")

                        window.location = "/"
                    })
                    .catch((error) => {
                        console.error('Error retrieving user data:', error.message);
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert("Error : " + errorMessage);
            });

    }
}


function resetPassword(){
    let email = document.getElementById("inpEmail").value;

    firebase.auth().sendPasswordResetEmail(email)
    .then(() =>{
        alert("✅ Password Reset Link Sent to your Registered Email Address");
    })
    .catch((error) =>{
        const errorMessage = error.message;
        alert(`⚠️ ${errorMessage}`);
    })
}