
/**
 * 
 * @param {String} carta 
 * @param {*} turno 
 */
export const crearCarta = (carta,turno,divCartasJugadores) =>{

    const imgCarta = document.createElement('img');
    imgCarta.src=`assets/cartas/${carta}.png`;
    imgCarta.classList.add('m-1','col-2','col-md-1');
    divCartasJugadores[turno].append(imgCarta);
    // divCartasComputadora.append(imgCarta);

} 