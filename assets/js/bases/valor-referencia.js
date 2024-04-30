



let a = 10;
let b = a;

console.log({a, b});

// Js todos los objetos se pasan por referencia
let juan = { nombre: 'Juan' };
// Se rompe la referencia que se pasa entre objetos en Js
let ana  = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });

// Cuando usamos ... en un argumento es un operador rest, 
// pero si lo usamos en cualquier otro lugar, es spread

// { ...persona } en el parámetro para romper la referencia
const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );

console.log({ peter, tony });


// Arreglos

const frutas = ['Manzana', 'Pera', 'Piña'];

// Segunda manera de romper referencia
console.time('slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice');

// Primera manera de romper referencia
console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });