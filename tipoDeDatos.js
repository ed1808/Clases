// Tipo de datos

// String
let nombre = "Juan";
console.log(nombre);

// Number
let edad = 30;
console.log(edad);

let numeroEnorme = 1n;
console.log(numeroEnorme);

// Boolean
let esEstudiante = true;
console.log(esEstudiante);

// Null
let direccion = null;
console.log(direccion);

// Undefined
let telefono;
console.log(telefono);

// Object
/**
 * Un objeto es una colección de propiedades, donde cada propiedad tiene un nombre (clave) y un valor.
 * Las propiedades pueden contener cualquier tipo de dato, incluyendo otros objetos.
 * Los objetos se definen utilizando llaves {} y las propiedades se separan por comas.
 * Se accede a las propiedades de un objeto utilizando la notación de punto (objeto.propiedad) o la notación de corchetes (objeto["propiedad"]).
 */
let persona = {
  nombre: "Maria",
  edad: 25,
  esEstudiante: false,
  direccion: {
    calle: "Calle Principal",
    ciudad: "Ciudad Ejemplo",
  },
};
console.log(persona.nombre);
// console.log(persona['nombre']);

console.log(persona.edad);
// console.log(persona['edad']);

console.log(persona.esEstudiante);
// console.log(persona['esEstudiante']);

console.log(persona.direccion.calle);
// console.log(persona['direccion']['calle']);

console.log(persona.direccion.ciudad);
// console.log(persona['direccion']['ciudad']);

// Array
/**
 * Un array es una colección de elementos ordenados, donde cada elemento tiene un índice numérico.
 * Los arrays se definen utilizando corchetes [] y los elementos se separan por comas.
 * Se accede a los elementos de un array utilizando el índice correspondiente (array[indice]).
 */
let frutas = ["Manzana", "Banana", "Naranja"];
console.log(frutas);
console.log(frutas[0]); // Manzana
console.log(frutas[1]); // Banana
console.log(frutas[2]); // Naranja

// Constantes

const PI = 3.14159;
console.log(PI);

// PI = 3.14; // Esto generará un error porque no se puede reasignar una constante

const arrayConstante = [1, 2, 3];
arrayConstante.push(4); // Esto es permitido, ya que no estamos reasignando la constante, sino modificando su contenido

const objetoConstante = { nombre: "Carlos", edad: 40 };
objetoConstante.esTrabajado = true; // Esto también es permitido, ya que no estamos reasignando la constante, sino modificando su contenido
objetoConstante.nombre = "Carlos Pérez"; // Esto también es permitido, ya que no estamos reasignando la constante, sino modificando su contenido
