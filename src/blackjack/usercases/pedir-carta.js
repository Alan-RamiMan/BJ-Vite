
/**
 * 
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String }Retorna la carta del deck
 */
export const pedirCarta = (deck) => {
    // const carta = (deck[deck.length-1]);
    // deck.pop();
    if ( !deck || deck.length === 0){
        throw 'No hay mas cartas para pedir';
    }
    // const carta = deck.pop();//.pop elimina el ultimo valor y lo puede asignar a una variable
    return deck.pop();
}