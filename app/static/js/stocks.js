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

document.getElementById("searchInput").value = "";

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const suggestionsContainer = document.getElementById('suggestionsContainer');

    let allData; // Variable to store all CSV data

    // Fetch and parse CSV file
    fetch('./static/data/NseStocksList.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').slice(1); // Skip header row
            allData = rows.map(row => {
                const columns = row.split(',');
                return columns.map(col => col.trim());
            });

            // Event listener for input changes
            searchInput.addEventListener('input', function () {
               
                const searchTerm = searchInput.value.toLowerCase();
                const matchingSuggestions = allData
                    .filter(row => row.length >= 2 && row[1].toLowerCase().includes(searchTerm))
                    .slice(0, 10); // Limit to 10 suggestions

                displaySuggestions(matchingSuggestions.map(row => row[1]));

                if(suggestionsContainer.innerHTML == ""){
                   let noStock = document.createElement("div");
                   noStock.className = "suggestionDiv";
                   noStock.innerHTML = "No Stock Found" 
                   document.getElementById("suggestionsContainer").appendChild(noStock)

                }
              
            });
        })
        .catch(error => console.error('Error fetching CSV:', error));

    // Event listener for suggestion clicks
    suggestionsContainer.addEventListener('click', function (event) {
        if (event.target.tagName === 'DIV') {
            const clickedSuggestion = event.target.textContent;
            const rowData = allData.find(row => row.length >= 2 && row[1] === clickedSuggestion);

            if (rowData) {
                const jsonResult = {
                    symbol: rowData[0],
                    name: rowData[1],
                    type: rowData[2],
                    date: rowData[3],
                };

                // Log or use the JSON result as needed
                console.log(JSON.stringify(jsonResult, null, 2));

                localStorage.setItem("currStockTicker", rowData[0]);

                localStorage.setItem("currStockName", rowData[1]);

                localStorage.setItem("currStockDate", rowData[3]);


                window.location = "stockinfo.html"
               
            }
        }
    });

    // Display suggestions in the container
    function displaySuggestions(suggestions) {
        suggestionsContainer.innerHTML = '';
        suggestions.forEach(suggestion => {
            let suggestionElement = document.createElement('div');
            suggestionElement.textContent = suggestion;
            suggestionsContainer.appendChild(suggestionElement);
            suggestionElement.className = "suggestionDiv"
        });
    }
});

