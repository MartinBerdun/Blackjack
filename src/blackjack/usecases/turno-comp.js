import { crearCartaHtml, pedirCarta, valorCarta } from "./index.js";

/**
 * 
 * @param {*Number} puntosMinimos Puntos minimos de la pc para ganar  
 * @param {Array<String>}deck
 * @param {HTMLElement}puntosHTML
 * @param {HTMLElement}divCartasComputadora
 * 
 * 
 */



export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora,deck = [] ) => {

    if(!puntosMinimos) throw new error ('puntosMinimos son necesario');

    if(!puntosHTML) throw new error ('argumento html es necesario');

    if(!deck) throw new error ('deck es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">

        // TODO: CREARCARTA
        const imgCarta = crearCartaHtml(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

