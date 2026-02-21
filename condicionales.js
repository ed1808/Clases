/**
 * Condicionales
 * 
 * Son estructuras de control que permiten ejecutar diferentes bloques de código
 * dependiendo de ciertas condiciones. En JavaScript, las principales estructuras
 * condicionales son: if, else if, else y switch.
 * 
 * 1. if: Se utiliza para ejecutar un bloque de código si una condición es verdadera.
 * 2. else if: Se utiliza para especificar una nueva condición si la primera condición es falsa.
 * 3. else: Se utiliza para ejecutar un bloque de código si todas las condiciones anteriores son falsas.
 * 4. switch: Se utiliza para ejecutar diferentes bloques de código basados en el valor de una expresión.
 * 
 * Ejemplos:
 * 
 * if (condicion) {
 *   // Código a ejecutar si la condición es verdadera
 * } else if (otraCondicion) {
 *   // Código a ejecutar si la primera condición es falsa y la otra condición es verdadera
 * } else {
 *   // Código a ejecutar si todas las condiciones anteriores son falsas
 * }
 * 
 * switch (expresion) {
 *   case valor1:
 *     // Código a ejecutar si la expresión es igual a valor1
 *     break;
 *   case valor2:
 *     // Código a ejecutar si la expresión es igual a valor2
 *     break;
 *   default:
 *     // Código a ejecutar si la expresión no coincide con ningún caso
 * }
 */

// Ejemplo de if, else if y else
let edad = 20;

if (edad < 18) {
  console.log("Eres menor de edad.");
} else if (edad >= 18 && edad < 65) {
  console.log("Eres adulto.");
} else {
  console.log("Eres mayor de edad.");
}

// Ejemplo de switch
let dia = "Lunes";

switch (dia) {
  case "Lunes":
    console.log("Hoy es lunes.");
    break;

  case "Martes":
    console.log("Hoy es martes.");
    break;

  case "Miércoles":
    console.log("Hoy es miércoles.");
    break;

  case "Jueves":
    console.log("Hoy es jueves.");
    break;

  case "Viernes":
    console.log("Hoy es viernes.");
    break;

  case "Sábado":
    console.log("Hoy es sábado.");
    break;

  case "Domingo":
    console.log("Hoy es domingo.");
    break;

  default:
    console.log("No es un día válido.");
}
