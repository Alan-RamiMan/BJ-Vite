
/**
 * 
 * @param {String} carta 
 * @returns {Number} Valor de la carta
 */
export const valorCarta = ( carta ) => {

    // const valor = carta[0];//Sirve pero regresa el primer valor en el caso del 10S me devolveria solo el 1 y no el 10
    const valor = carta.substring(0,carta.length-1);//corto el string desde el valor 0 hasta el -1(python) hasta antes del ultimo
    // let puntos = 0;

    // if( isNaN(valor)){//si el valor cortado del string anterior es un numero dara false 
    //     console.log('No es un numero')
    //     puntos = (valor ==='A') ? 11 : 10 ;
    //     console.log(puntos)
    // }else{
    //     console.log('Es un numero')
    //     puntos = parseInt(valor);
    //     console.log(puntos)
    // }
    // puntos = (isNaN(valor)) ? puntos = (valor ==='A') ? 11 : 10 : puntos = parseInt(valor)  ;//cumple lo mismo que los if de arriba , se debe primero poner la opcion que da como resultado un True
    return ( isNaN( valor)) ?//forma aun mas ebreviada , sin necesidad de declarar variable puntos
            (valor === 'A')? 11 : 10 
            :parseInt(valor);
    // console.log(puntos)
    // console.log(isNaN(valor))
}