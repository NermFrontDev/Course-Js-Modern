
class Persona {

    static _conteo = 0;
    static get getConteo () {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre ); // undefined
        console.log( 'Hola a todos, soy un método estático' );
    }

    // Propiedades de la clase:
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    // El constructor de una clase siempre 
    // regresa la instancia de un objeto
    constructor( nombre = 'No nombre', codigo = 'No codigo', frase = 'No frase' ) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita ( comida ) {
        this.comida = comida;
    }

    get getComidaFavorita () {
        return `La comida favorita de ${this.nombre} es ${this.nombre}`;
    }

    quienSoy() {
        console.log( `Soy ${this.nombre} y mi identidad es ${this.codigo}` );
    }

    miFrase() {
        // this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

class Heroe extends Persona{

    clan = 'Sin clan';

    constructor( nombre, codigo, frase ) {
        super( nombre, codigo, frase );

        this.clan = 'Avengers';
    }

    quienSoy() {
        console.log( `Soy ${ this.nombre }, ${ this.clan }` );
        super.quienSoy();
    }
}

// La palabra reservada 'new' indica a Js que se crea una nueva instancia
const spiderpapu = new Heroe( 'Peterpapu', 'Spiderpapu', 'Spiderpapu al rescate!! mmm uaah!' );
// const spiderpapu = new Heroe();
console.log(spiderpapu);