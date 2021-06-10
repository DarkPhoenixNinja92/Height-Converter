let convertValue = () => {
    let feetInput = document.getElementById("feet-input").value;
    let inchesInput = document.getElementById("inches-input").value;
    let centimeterOutput = (parseInt((feetInput * 12)) + parseInt(inchesInput)) * 2.54 + " Cm.";
    document.getElementById("output-centimeter").append(centimeterOutput);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("height-submit").addEventListener('click', convertValue);
})