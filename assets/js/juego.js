/**
 * 2C = Two of Clubs (Tréboles)
 * 2C = Two of Diamonds (Diamantes)
 * 2C = Two of Hearts (Corazones)
 * 2C = Two of Swords (Espadas)
 */

let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

// Esta funcion crea nueva baraja
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for( let tipo of tipos ) {
            deck.push( i + tipo );
        }
    }

    for( let tipo of tipos ) {
        for ( const especial of especiales ) {
            deck.push( especial + tipo );
        }
    }

    deck = deck.sort( () => 0.5 - Math.random() );
    // deck = _.shuffle( deck );
    console.log( deck );
    return deck;


}

crearDeck();

// Esta función me permite nueva carta
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    
    const carta = deck.pop();

    console.log(deck);
    console.log(carta); // carta debe ser de la baraja
    return carta;
}

// pedirCarta();

const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);

    return ( isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}

const valor = valorCarta('AD');
console.log({ valor });