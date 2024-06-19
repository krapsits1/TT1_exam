// Form input validation

function validateForm() {

    var  username = document.forms["myForm"]["name"].value;
    if (username === "") {
        alert("Nav ievādīts vārds!");
        return false;
    }
    var email = document.forms["myForm"]["email"].value;
    if (email === "") {
        alert("Nav ievādīts e-pasts!");
        return false;
    }
    if (email.includes("@") === false || email.includes(".") === false) {
    alert("Nav ievadīts korekts e-pasts! Tam ir jāssatur '@' zīmi un '.' ");
    return false;
    }
    if (email === "") {
        alert("Nav ievādīts e-pasts!");
        return false;
    }
    let phone = document.forms["myForm"]["phone"].value;
    if (isNaN(phone)) {
        alert("Tālruņa numuram ievadiet tikai ciparus!");
        return false;
    }
    if (phone === "") {
        alert("Nav ievādīts tālrunis!");
        return false;
    }
    var zina = document.forms["myForm"]["zina"].value;
    if (zina === "") {
        alert("Nav ievādīta ziņa!");
        return false;
    }
    var atstarpes = 0;
    for(let char = 0; char<zina.length; char++){
        if(zina[char] ===" "){
            atstarpes++;
        }
    }
    if(atstarpes>2){
        alert("Ziņas garums pārsniedz 3 vārdu limitu!");
        return false;
    }
    return true;
} 

// DOM element creation
document.addEventListener("DOMContentLoaded", function() {
    
    var jsonData = {
        name: "Katy Perry",
        p1: "Absolūts dizaina šedevrs - elegants un moderns",
        p2: "Lieliska mājaslapa!"
    };

    var h4 = document.createElement("h4");
    h4.textContent = jsonData.name;

    var p1 = document.createElement("p");
    p1.textContent = jsonData.p1;

    var p2 = document.createElement("p");
    p2.textContent = jsonData.p2;
    
    var slavenibaContainer = document.getElementById("slaveniba-perry");

    slavenibaContainer.appendChild(h4);
    slavenibaContainer.appendChild(p1);
    slavenibaContainer.appendChild(p2);
});
// DOM element creation Jquery

$(document).ready(function() {
    
    var jsonData = {
        name: "Mark Zuckenberg",
        p1: "Izsmalcināta kvalitāte un labi izstrādāts dizains!",
        p2: "Lieliska mājaslapa!",
    };

    var h4 = $("<h4>").text(jsonData.name);
    var p1 = $("<p>").text(jsonData.p1);
    var p2 = $("<p>").text(jsonData.p2);
    
    $("#slaveniba-zuck").append(h4, p1, p2);
});

//Vairak atsauksmes 

function vairakAtsauksmes(){
    var vairakinfo = document.getElementById("vairak-info");
    var style = window.getComputedStyle(vairakinfo).display;

    if(style== "none"){
        vairakinfo.style.display = "block";
    }else{
        vairakinfo.style.display = "none";
    }
    
    var poga = document.getElementById("poga-vairak-info");
    
    if(poga.innerHTML == "Vairāk atsauksmes"){
        poga.innerHTML = "Mazāk atsauksmes";
    }else{
        poga.innerHTML = "Vairāk atsauksmes";
    }
}