const billDivideForm = document.getElementById("bill-divider-form");

billDivideForm.addEventListener("submit", billDivideHandler);

function billDivideHandler(event){
    event.preventDefault()
    const inputs = getInputs();
   showCalculateOutput(inputs)
}

//get all the inputs for the bill divider
function getInputs(){
    let subtotal = document.getElementById("subtotal").value;
    let tipPercent = document.getElementById("tip").value;
    let noOfPerson = document.getElementById("no-of-person").value;
    return {subtotal, tipPercent, noOfPerson};
}

//calculate the bill divider info
function showCalculateOutput(input){
    
}