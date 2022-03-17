let bill = 0;
let tip = 0;
let numberPeople = 0;
let tipAmountPerson = 0;
let totalPerson = 0;

let selectedTip;
const PERCENTAGE_TO_DECIMAL = 100;

function resetValues() {
    bill = 0;
    tip = 0;
    numberPeople = 0;
    tipAmountPerson = 0;
    totalPerson = 0; 
}

function updateHTMLValues() {
    document.getElementById("tipAmountPerson").innerHTML = `$ ${tipAmountPerson.toFixed(2)}`;
    document.getElementById("totalPerson").innerHTML = `$ ${totalPerson.toFixed(2)}`;
}

function disableButton() {
    const button = document.querySelector('button');    
    if(numberPeople || tip || bill) {        
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

tipCalculator.onchange = function(event)  {  
    if(event.target.id === "bill") bill = event.target.value || 0;
    if(event.target.id === "numberPeople") {
        numberPeople = event.target.value || 0;
        if(numberPeople == 0) {
            console.log(numberPeople);
            document.getElementById("numberPeople").style.borderColor = "#E17052";
            document.getElementById("errorMessage").style.display = "inline";
        } else {
            document.getElementById("numberPeople").style.borderColor = "transparent"; 
            document.getElementById("errorMessage").style.display = "none";           
        }
    }   
    
    selectedTip = document.querySelector('input[name="tip"]:checked');

    if(event.target.id === "custom") {
        tip = event.target.value  || 0;
        if(selectedTip) selectedTip.checked = false;
    }

    if(event.target.name === "tip") {
        tip = event.target.value;
        document.getElementById('custom').value = "";
    }

    if(numberPeople != 0) {
        tipAmountPerson = (bill * (tip / PERCENTAGE_TO_DECIMAL)) / numberPeople;
        totalPerson = tipAmountPerson + (bill / numberPeople);
    } 
    
    disableButton();
    
    updateHTMLValues();
}

function resetForm() {
    document.getElementById('tipCalculator').reset();
    resetValues();
    updateHTMLValues();
    disableButton();
}