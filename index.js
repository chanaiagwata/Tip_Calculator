//calculate tip
function calculateTip() {
    let billAmt = document.getElementById("billamt").value;
    let serviceQual = document.getElementById("serviceQual").value;
    let numberOfPeople = document.getElementById("peopleamt").value;

    //validate input
    if (billAmt === "" || serviceQual == 0) {
        alert("please enter values");
        return;
    }
    //check to see if this input is empty or less than or equal to 1
    if (numberOfPeople == "" || numberOfPeople <= 1) {
        numberOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }
    //calculate tip
    let total = (billAmt * serviceQual) / numberOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after the decial point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;



}
//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
//click to call function
document.getElementById("calculate").onclick = function () {
    calculateTip()
};