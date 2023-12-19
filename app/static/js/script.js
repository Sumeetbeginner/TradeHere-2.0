
let mediaPC = window.matchMedia("(min-width:1025px)")

function openPhoneNavbar(){

    if(!mediaPC.matches){
       document.getElementById("sideBar1").style.left = "0%"; 
    }
}

function closeNavBar(){

    if(!mediaPC.matches){
       document.getElementById("sideBar1").style.left = "-65%"; 
    }
}