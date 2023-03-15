console.log(document);

const buttonCalculator = document.getElementById("calculate");
console.log(buttonCalculator);

const edgeInput = document.getElementById("edge");
console.log(edgeInput);

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
    var edge = edgeInput.value;
    console.log(edge);
    var thickness = thicknessInput.value;
    console.log(thickness);
    var shear = shearInput.value;
    console.log(shear);
    var amount = amountInput.value;
    console.log(amount);
    var result = edge * 4 * thickness  * shear * amount;
    cuttingForce.innerText = `Força de corte = ${result.toFixed(2)} kgf`;
    console.log( `Força de corte = ${result.toFixed(2)} kgf`);
}

buttonCalculator.addEventListener("click", () => {
    calculate();
});