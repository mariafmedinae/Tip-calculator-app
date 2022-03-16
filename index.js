let bill = 0;
let tip = 0;
let numberPeople = 0;
let tipAmountPerson = 0;
let totalPerson = 0;

let selectedTip;
const PERCENTAGE_TO_DECIMAL = 100;

tipCalculator.onchange = function(event)  {
    tipAmountPerson = 0;
    totalPerson = 0;
    
    if(event.target.id === "bill") bill = event.target.value || 0;
    if(event.target.id === "numberPeople") numberPeople = event.target.value || 0;
    
    selectedTip = document.querySelector('input[name="tip"]:checked');

    if(event.target.id === "custom") {
        tip = event.target.value  || 0;
        if(selectedTip) selectedTip.checked = false;
    }

    if(event.target.name === "tip") {
        tip = event.target.value;
        document.getElementById('custom').value = "";
    }

    if(bill && numberPeople) {
        tipAmountPerson = (bill * (tip / PERCENTAGE_TO_DECIMAL)) / numberPeople;
        totalPerson = tipAmountPerson + (bill / numberPeople);
    } 

    document.getElementById("tipAmountPerson").innerHTML = tipAmountPerson.toFixed(2);
    document.getElementById("totalPerson").innerHTML = totalPerson.toFixed(2);
}

function resetForm() {
    document.getElementById('tipCalculator').reset();
}