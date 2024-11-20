import { pedirCarta, valorCarta, crearCartaHtml } from "./";



/**
 * Turno de la computadora
 * @param {Number} puntosMinimos que la computadora necesita para ganar
 * @param {HtmlElement} Elemento html para mostrar los puntos
 * @param {HtmlElement} divCartasComputadora 
 * @param {Array<String>} deck 
 */

// turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora,  deck = [] ) => {
    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios'); 
    if(!puntosHTML) throw new Error('Elemento html para mostrar los puntos es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHtml(carta);
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