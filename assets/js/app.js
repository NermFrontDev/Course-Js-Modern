
// console.log('Hola mundo');

// Se puede reasignar sin simportar el scope
var a = 10; // Ya no se usa actualmente
// Reasignable dependiendo el scope
let b = 20;
// No se puede reasignar la variable, sin importar el scope
const c = 30;

// c = 20 // no se puede reasignar

let d = 10,
    e = 20,
    f = 'Hola ',
    g = 'Nerm',
    x = d + e;


const saludo = f + g;

f = 'Hola de nuevo';

// Consola Intro

/* console.log( 'a', a );
console.warn( 'b', b );
console.error( 'c', c ); */

// Otra manera de mostrarlo
console.log({ a });
console.warn({ b });
console.error({ c });

// Un metodo recibe argumentos

// Problemas con la inicialización de variables con Var
var outerWidth = 100000;
var outerHeight = 600;