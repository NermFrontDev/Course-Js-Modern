/**
 * 2C = Two of Clubs (Tréboles)
 * 2C = Two of Diamonds (Diamantes)
 * 2C = Two of Hearts (Corazones)
 * 2C = Two of Swords (Espadas)
 */

let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

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

    console.log( deck );
    deck = deck.sort( () => 0.5 - Math.random() );
    // deck = _.shuffle( deck );
    console.log( deck );
    return deck;



}

crearDeck();