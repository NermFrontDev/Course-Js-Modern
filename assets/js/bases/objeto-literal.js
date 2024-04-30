

let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.102,
        long: -118.30,
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War',
};

console.log( personaje );
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);

console.log('Coors:', personaje.coords);
console.log('Lat:', personaje.coords.lat);

console.log('No. Trajes:', personaje.trajes.length);
console.log('Ultimo Traje:', personaje.trajes[ personaje.trajes.length - 1 ]);

const x = 'vivo';
console.log('Vivo:', personaje[x]);

console.log( 'Última película:', personaje['ultima-pelicula'] );



/* ============ Más detalles ============ */

// borrar propiedad del array
delete personaje.edad;
console.log( personaje );

personaje.casado = true;

const entriesPares = Object.entries( personaje );
console.log( entriesPares );

Object.freeze( personaje );

personaje.dinero = 10000000;
personaje.casado = false;
// Object.freeze( personaje.direccion )
personaje.direccion.ubicacion = 'Honduras';
console.log( personaje );

// Metodo para obtener las propiedades del arreglo
const propiedades = Object.getOwnPropertyNames ( personaje );
console.log({ propiedades });

// Metodo para obtener los valores del arreglo
const valores = Object.values ( personaje );
console.log({ valores });