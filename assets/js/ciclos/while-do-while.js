


const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

/* while ( i < carros.length ) {
    console.log( carros[i] );
    // i = i + 1;
    // i += 1;
    i++;
} */

// undefined
// null
// false

while ( carros[i] ) {
    if ( i === 1 ) {
        // break;
        i++;
    }
    console.log( carros[i] );
    i++;
}


console.warn('Do while');
let car = 0;

do {
    console.log( carros[car] );
    car++;
} while ( carros[car] );




