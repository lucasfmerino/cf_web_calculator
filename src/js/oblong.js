console.log(document);

const buttonCalculator = document.getElementById("calculate");
console.log(buttonCalculator);

const obLen = document.getElementById("length");
console.log(obLen);

const obWid = document.getElementById("width");
console.log(obWid);

const thicknessInput = document.getElementById("thickness");
console.log(thicknessInput);

const shearInput = document.getElementById("shear");
console.log(shearInput);

const amountInput = document.getElementById("amount");
console.log(amountInput);

const cuttingForce = document.getElementById("result");
console.log(cuttingForce);

function calculate(){
    console.log("click event");
    var length = obLen.value;
    console.log(length);
    var width = obWid.value;
    console.log(width);
    var thickness = thicknessInput.value;
    console.log(thickness);
    var shear = shearInput.value;
    console.log(shear);
    var amount = amountInput.value;
    console.log(amount);
    var result = (((length - width) * 2) + (width * 3.141593)) * thickness  * shear * amount;
    cuttingForce.innerText = `Força de corte = ${result.toFixed(2)} kgf`;
    console.log( `Força de corte = ${result.toFixed(2)} kgf`);
}

buttonCalculator.addEventListener("click", () => {
    calculate();
});