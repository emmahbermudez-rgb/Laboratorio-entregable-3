
function realizarOperacion(num1, num2, operacion) {
if (operacion === "suma") 
{
return num1 + num2;
} else if (operacion === "resta") {
return num1 - num2;
} else if (operacion === "multiplicacion") {
return num1 * num2;
} else if (operacion === "division") {
if (num2 === 0) {
return "Error: no se puede dividir entre 0";
}
return num1 / num2;
} else {
return "Operación no válida";
}
}


function iniciarCalculadora() {
let operacion = "";


while (operacion !== "salir") {
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
operacion = prompt("Ingresa la operación (suma, resta, multiplicacion, division) o escribe 'salir':");


if (operacion === "salir") {
alert("Gracias por usar la calculadora. Adiós!");
break;
}


let resultado = realizarOperacion(num1, num2, operacion);
alert("Resultado: " + resultado);
}
}