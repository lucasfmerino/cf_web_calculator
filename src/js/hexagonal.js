console.log(document);

const buttonCalculator = document.getElementById("calculate");
console.log(buttonCalculator);

const hexInput = document.getElementById("hex");
console.log(hexInput);

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
    var hex = hexInput.value;
    console.log(hex);
    var thickness = thicknessInput.value;
    console.log(thickness);
    var shear = shearInput.value;
    console.log(shear);
    var amount = amountInput.value;
    console.log(amount);
    var result = (2 * hex * (3 ** ( 1/ 2 ))) * thickness  * shear * amount;
    cuttingForce.innerText = `Força de corte = ${result.toFixed(2)} kgf`;
    console.log( `Força de corte = ${result.toFixed(2)} kgf`);
}

buttonCalculator.addEventListener("click", () => {
    calculate();
});