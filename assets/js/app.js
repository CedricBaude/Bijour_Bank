console.log("Bijour Bank !");
/**
 * init foundation
 */
$(document).ready(function () {
  $(document).foundation();
});

// * -- Affichage des onglets -- * 

const credit_tab = document.querySelector("#credit_tab");
credit_tab.addEventListener("click", function(){

    let debits = document.getElementsByClassName('debit');
    for (let i = 0; i < debits.length; i++) {
        debits[i].style.display="none"}

    let credits = document.getElementsByClassName('credit');
    for (let i = 0; i < credits.length; i++) {
    credits[i].style.display="contents"}
    
    credit_tab.setAttribute("class", "active");
    all_tab.removeAttribute("class");
    debit_tab.removeAttribute("class");
})

const debit_tab = document.querySelector("#debit_tab");
debit_tab.addEventListener("click", function(){

    let credits = document.getElementsByClassName('credit');
    for (let i = 0; i < credits.length; i++) {
    credits[i].style.display="none"}

    let debits = document.getElementsByClassName('debit');
    for (let i = 0; i < debits.length; i++) {
        debits[i].style.display="contents"}
    
    debit_tab.setAttribute("class", "active");
    all_tab.removeAttribute("class");
    credit_tab.removeAttribute("class");
})

const all_tab = document.querySelector("#all_tab")
all_tab.addEventListener("click",function(){

    let credits = document.getElementsByClassName('credit');
    for (let i = 0; i < credits.length; i++) {
    credits[i].style.display="contents"}

    let debits = document.getElementsByClassName('debit');
    for (let i = 0; i < debits.length; i++) {
        debits[i].style.display="contents"}

        all_tab.setAttribute("class", "active");
        credit_tab.removeAttribute("class");
        debit_tab.removeAttribute("class");
})

//const operator = document.querySelector("#operator");
//const titre = document.querySelector("#titre");
//const desc = document.querySelector("#desc");
//const montant = document.querySelector("#montant");


const div = document.querySelector("#data");

    
let formulaire = document.getElementById("operationForm");
formulaire.addEventListener("submit", function (e) {
    e.preventDefault();
        const overlay = document.querySelector(".reveal-overlay");
        overlay.style.display = "none";

    let operator = document.querySelector("#operator").value;
    let titre = document.querySelector("#titre").value;
    let desc = document.querySelector("#desc").value;
    let montant = document.querySelector("#montant").value;

    let values = [ operator, titre, desc, montant ]
    document.querySelector("#data").innerHTML += values;
    formulaire.reset();
});

