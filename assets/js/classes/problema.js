

const nerm = {
    nombre: 'Nerm Dev',
    edad: 28,
    imprimir(){
        console.log( `Nombre: ${ this.nombre } - Edad: ${ this.edad }` );
    }
}

const mono = {
    nombre: 'Mono Dev',
    edad: 29,
    imprimir(){
        console.log( `Nombre: ${ this.nombre } - Edad: ${ this.edad }` );
    }
}

// nerm.imprimir();

function Persona( nombre, edad ) {
    console.log( 'Se ejecutó esta linea' );
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log( `Nombre: ${ this.nombre } - Edad: ${ this.edad }` );
    }
}

// La palabra reserva 'new' indica a Js que se crea una nueva instancia
const maria = new Persona( 'Maria', 20 );
console.log( maria );
maria.imprimir();