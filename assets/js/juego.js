/**
 * 2C = Two of Clubs (Tréboles)
 * 2C = Two of Diamonds (Diamantes)
 * 2C = Two of Hearts (Corazones)
 * 2C = Two of Swords (Espadas)
 */

let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnStop = document.querySelector('#btnDetener');
const btnNuevoJuego = document.querySelector('#btnNuevo');
const aumentarPuntos = document.querySelectorAll('small');
const jugadorCartas = document.querySelector('#jugador-cartas');
const computadoraCartas = document.querySelector('#computadora-cartas');

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
    return deck;
}

crearDeck();

// Esta función me permite nueva carta
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

// pedirCarta();

const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);

    return ( isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}


// Turno de la computadora

const turnoComputadora = ( puntosMinimos ) => {
    do {
        const carta = pedirCarta();
    
        puntosComputadora = puntosComputadora + valorCarta( carta );
        aumentarPuntos[1].innerText = puntosComputadora;
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/images/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        computadoraCartas.append( imgCarta );

        if ( puntosMinimos > 21 ) {
            break;
        }
        
    } while ( (puntosComputadora < puntosMinimos) && ( puntosMinimos <= 21 ) );

    setTimeout(() => {
        alertaJuego = ( puntosMinimos === puntosComputadora ) ? alert('Nadie gana') :
                                                            ( puntosMinimos > 21 ) ? alert('Computadora gana') : ( puntosComputadora > 21 ) ? alert('Felicidades, usted ha ganado') : alert('Computadora gana');
    }, 15);
}



// Eventos

// Función que se manda a llamar a otra, se le llama callback
btnPedir.addEventListener('click', ()=>{
    
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta( carta );
    aumentarPuntos[0].innerText = puntosJugador;
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/images/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    jugadorCartas.append( imgCarta );


    if ( puntosJugador > 21 ) {
        btnPedir.disabled = true;
        btnStop.disabled = true;
        turnoComputadora( puntosJugador );

    } else if ( puntosJugador === 21 ) {
        jugadorCartas.append( imgCarta );
        btnPedir.disabled = true;
        btnStop.disabled = true;
        turnoComputadora( puntosJugador );
    }

});

btnStop.addEventListener('click', ()=>{
    btnPedir.disabled = true;
    btnStop.disabled = true;
    turnoComputadora( puntosJugador );
});

btnNuevoJuego.addEventListener('click', () => {
    deck = [];
    deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;

    aumentarPuntos[0].innerText = 0;
    aumentarPuntos[1].innerText = 0;

    jugadorCartas.innerHTML = '';
    computadoraCartas.innerHTML = '';

    btnPedir.disabled = false;
    btnStop.disabled = false;
})
