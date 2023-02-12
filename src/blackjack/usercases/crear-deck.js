import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = () => {

    const tiposCartas = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];


    if (!tiposCartas || tiposCartas.length===0) throw new Error ('tiposCartas es obligatorio como un arreglo de string');
    


    let deck = [];
    
    for( let i = 2; i <= 10 ; i++ ){
        for( let tipo of tiposCartas){
            deck.push( i + tipo);
        }
    }
    for(let tipo of tiposCartas){
        for(let especial of especiales){
            deck.push(especial+tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}