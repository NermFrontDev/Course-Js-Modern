

let juegos = [
    'Zelda',
    'Mario',
    'Metroid',
    'Chromo',
]
console.log('Largo:', juegos.length);

let primero = juegos[ 2 - 2 ];
let ultimo = juegos[ juegos.length - 1 ];

console.log( primero, ultimo );

/* =========== Metodos en Arreglos =========== */

// ForEach recorre el arreglo con su elemento, el indice y mas
juegos.forEach( (elemento, indice, arr) => {
    /* console.log({ elemento, indice, arr }); */
} )

// Push inserta el item hasta lo ultimo del arreglo
let nuevaLongitud = juegos.push('F-Zero');
console.log({ nuevaLongitud, juegos });

// Unshift inserta al inicio del arreglo el nuevo item
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

// Para borrar el ultimo item se usa pop()
let juegoBorrado = juegos.pop(5);
console.log({ juegoBorrado, juegos });

// Borrar algun elemento en alguna posición específica
let pos = 1;
let juegosBorrados = juegos.splice( pos, 2 );
console.log({ juegosBorrados, juegos });

// Para ubicar el elemento del array, se usa indexOf()
let metroidIndex = juegos.indexOf('Metroid'); // CaseSensitive
console.log( metroidIndex );