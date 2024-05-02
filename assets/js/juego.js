
// Patrón Módulo

const miModulo = (() => {
    'use strict'

    let deck         = [];
    const tipos      = ['C', 'D', 'H', 'S'],
            especiales = ['A', 'J', 'Q', 'K'];
    
    let puntosJugadores = [];
    
    // Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
            btnStop = document.querySelector('#btnDetener'),
            btnNuevoJuego = document.querySelector('#btnNuevo');

    const aumentarPuntos = document.querySelectorAll('small'),
            divCartasJugadores = document.querySelectorAll('.divCartas')

    // Inicializa el juego
    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        aumentarPuntos.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '' );
    
        btnPedir.disabled = false;
        btnStop.disabled = false;
    }
    
    // Esta funcion crea nueva baraja
    const crearDeck = () => {

        deck = [];

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
    
        // deck = deck.sort( () => 0.5 - Math.random() );
        return deck = deck.sort( () => 0.5 - Math.random() );
    }
    
    // Esta función me permite nueva carta
    const pedirCarta = () => {
    
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }
    
    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length - 1);
    
        return ( isNaN( valor ) ) ?
                ( valor === 'A' ) ? 11 : 10
                : valor * 1;
    }
    
    // Turno: 0 = primer jugador y el ultimo sera la computadora
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        aumentarPuntos[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = ( carta, turno ) => {
        const imgCarta = document.createElement('img');
            imgCarta.src = `assets/images/cartas/${ carta }.png`;
            imgCarta.classList.add('carta');
            divCartasJugadores[turno].append( imgCarta );
    }

    const definirGanador = () => {

        // Desestructuración de arreglos
        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

        setTimeout(() => {
            if ( puntosMinimos === puntosComputadora ) {
                alert('Nadie gana');
            } else if ( puntosMinimos > 21 ) {
                alert('Computadora gana');
            } else if ( puntosComputadora > 21 ) {
                alert('Felicidades, usted ha ganado');
            } else {
                alert('Computadora gana');
            }

        }, 15);
    }
    
    // Turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {

        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos( carta, puntosJugadores.length - 1 );
            crearCarta( carta, puntosJugadores.length - 1 );
            
        } while ( (puntosComputadora < puntosMinimos) && ( puntosMinimos <= 21 ) );

        definirGanador();
    
    }
    
    
    
    // Eventos
    
    // Función que se manda a llamar a otra, se le llama callback
    btnPedir.addEventListener('click', ()=>{
        
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos( carta, 0 );

        crearCarta( carta, 0 );
    
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

        inicializarJuego();

    })

    return {
        nuevoJuego: inicializarJuego
    }
    
})();
