// Funcion tradicional:
// Si la funcion no contiene un return, lo que devuelve es undefined
function saludar( nombre ) {
    console.log( arguments );
    console.log('Hola ' + nombre);
    return 1;

    // Esto nunca se va a ejecutar
    console.log('Soy una nueva linea de código después del return');
}

// Funcion anónima:
const saludar2 = function(nombre){
    console.log('Hola ' + nombre);
}

// Funciones de flecha:
const saludarFlecha = () => {
    console.log('Hola Flecha');
}
// funcion flecha con argumento
const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
}


const retornoSaludar = saludar('Nerm', 40, true, 'Honduras');
console.log( retornoSaludar );
saludarFlecha();
saludarFlecha2('Nerm Developer');
// saludar2('Nerm');



/* ============= Ejercicios ============= */

function sumar(a, b) {
    return a + b;
}


// const sumar2 = (a,b) => {
//     return a + b;
// }

const sumar2 = (a,b) => a + b;

console.log( sumar2(1, 2) );

/* Ejercicio de clase */
function getAleatorio() {
    return Math.random();
}

// getAleatorio en funcion de flecha
const getAleatorio2 = () => Math.random();
console.log( getAleatorio2() );
