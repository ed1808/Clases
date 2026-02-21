let num1 = Number.parseFloat(prompt('Ingrese el primer número:'));
let num2 = Number.parseFloat(prompt('Ingrese el segundo número:'));

if (num2 == 0) {
    console.log('No se puede dividir por cero.');
} else {
    console.log('El resultado de la división es: ' + (num1 / num2));
}