

class Persona {
    // Propiedades de la clase:
    nombre = '';
    codigo = '';
    frase = '';

    // El constructor de una clase siempre 
    // regresa la instancia de un objeto
    constructor( nombre = 'No nombre', codigo = 'No codigo', frase = 'No frase' ) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    quienSoy() {
        console.log( `Soy ${this.nombre} y mi identidad es ${this.codigo}` );
    }

    miFrase() {
        // this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

// La palabra reservada 'new' indica a Js que se crea una nueva instancia
const spiderpapu = new Persona( 'Peterpapu', 'Spiderpapu', 'Spiderpapu al rescate!! mmm uaah!' );
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' );
// console.log( spiderpapu );
// console.log( ironman );

spiderpapu.quienSoy();
spiderpapu.miFrase();