

let a = 5;

if ( a >= 10 ) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

// console.log('Fin del programa');


const hoy = new Date();

let dia = hoy.getDay(); // 0: Domingo; 1: Lunes; 2: Martes...

console.log({ dia });

// == compara si los valores son iguales sin importar el tipado
// === Evalua tanto los valores internos como el tipado sean los mismos

if ( dia === 0 ) {
    console.log('Es Domingo');
} else if ( dia === 1 ) {
    console.log('Lunes');

    // if ( dia === 1 ) {
    //     console.log('Hoy es Lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }
} else if ( dia === 2 ) {
    console.log('Martes');
} else {
    console.log('No es lunes, ni martes, ni domingo');
}

// Sin usar If Else, o Switch, unicamente objetos

let diaSemana = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
];

dia = 7; // 0: Domingo; 1: Lunes; 2: Martes...

// día de la semana
console.log('El día es: ', diaSemana[dia] || 'no valido');


