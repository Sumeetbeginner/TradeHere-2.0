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

let currStockTicker = localStorage.getItem("currStockTicker")

function getStockDataFromPython(){

    const data = {
        stockTickerSymbol : currStockTicker
    }

    fetch('/stock_operation', {
        method: 'POST',
        headers:{
            'Content-type' : 'application/json'
        },

        body: JSON.stringify(data)
    })
    .then(response => (response.json()))
    .then(function (result){
        // Converting Object into a JSON String before storing it
        const resultJSONString = JSON.stringify(result.result);

        // Store the JSON string in local storage
        localStorage.setItem('stockResult', resultJSONString);
        localStorage.setItem('stockNews', JSON.stringify(result.result2));

        document.body.style.visibility = "visible";
    });
}

getStockDataFromPython();