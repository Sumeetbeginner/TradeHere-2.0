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

// Checking whether user is signed in or not if not redirecting to login page

function checkUserAuth(){
    
    auth.onAuthStateChanged(user =>{
        if(user){
            // User is Signed In
        }
        else{
            window.location = "/login.html"
        }
    })
}

checkUserAuth();

let mediaPC = window.matchMedia("(min-width:1025px)")

function openPhoneNavbar() {

    if (!mediaPC.matches) {
        document.getElementById("sideBar1").style.left = "0%";
    }
}

function closeNavBar() {

    if (!mediaPC.matches) {
        document.getElementById("sideBar1").style.left = "-65%";
    }
}

function openPage(link){
    window.location = link
}