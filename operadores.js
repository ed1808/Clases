// Operadores

// Aritméticos
let a = 10;
let b = 5;

console.log(a + b); // Soma
console.log(a - b); // Subtração
console.log(a * b); // Multiplicação
console.log(a / b); // División
console.log(a % b); // Módulo

// Asignación
let c = 20;
c += 5; // c = c + 5
console.log(c);

c -= 3; // c = c - 3
console.log(c);

c *= 2; // c = c * 2
console.log(c);

c /= 4; // c = c / 4
console.log(c);

c %= 3; // c = c % 3
console.log(c);

// Comparación
let x = 10;
let y = "10";

console.log(x == y); // Igualdad (true, porque compara solo el valor)
console.log(x === y); // Identidad (false, porque compara el valor y el tipo)
console.log(x != y); // Desigualdad (false, porque compara solo el valor)
console.log(x !== y); // No identidad (true, porque compara el valor y el tipo)

console.log(x > 5); // Mayor que (true)
console.log(x < 15); // Menor que (true)
console.log(x >= 10); // Mayor o igual que (true)
console.log(x <= 10); // Menor o igual que (true)

// Lógicos
let p = true;
let q = false;

/**
 * AND lógico (&&): Devuelve true si ambos operandos son true, de lo contrario devuelve false.
 * 
 * | a | b | a && b |
 * |---|---|-------|
 * | T | T |   T   |
 * | T | F |   F   |
 * | F | T |   F   |
 * | F | F |   F   |
 * 
 * OR lógico (||): Devuelve true si al menos uno de los operandos es true, de lo contrario devuelve false.
 * 
 * | a | b | a || b |
 * |---|---|-------|
 * | T | T |   T   |
 * | T | F |   T   |
 * | F | T |   T   |
 * | F | F |   F   |
 * 
 * NOT lógico (!): Devuelve true si el operando es false, y devuelve false si el operando es true.
 * 
 * | a | !a |
 * |---|----|
 * | T | F  |
 * | F | T  |
 */

console.log(p && q); // AND lógico (false)
console.log(p || q); // OR lógico (true)
console.log(!p); // NOT lógico (false)
console.log(!q); // NOT lógico (true)