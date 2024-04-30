


const elMayor = ( a, b ) => {
    return ( a > b ) ? a : b ;
}

const tieneMembresia = ( miembro ) => (miembro) ? '2 Dólares' : '10 Dólares' ;
console.log( tieneMembresia(true) ); // 2 Dólares

// console.log( elMayor( 20, 15 ) ); // 20


const amigo = true;
const listaAmigos = [
    'Peter',
    'Tony',
    'Dr. Strange',
    'Hulk',
    amigo ? 'Thor' : 'Loki',
];

console.log( listaAmigos );


const nota = 83; // A+, A, B+, B..
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'C+' :
              nota >= 75 ? 'C'  : 'F';

console.log( `La calificación es: ${grado}, porque la nota es: ${nota}` );



