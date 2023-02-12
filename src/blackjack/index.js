
import _ from 'underscore';
// import { crearDeck } from './usercases/crear-deck';
// import { pedirCarta } from './usercases/pedir-carta';
// import { valorCarta } from './usercases/valor-carta';

import {crearDeck,pedirCarta,valorCarta,crearCarta} from './usercases';
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'


// 2C=Two of Clubs
// 2D=Two of Diamonds
// 2H=Two of Hearts
// 2S=Two of Spades

//Patron Modulo , desde ECMAScript 5 ,permite ademas encapsular el codigo y protegerlo .
//Sintaxis :
const  miModulo= (()=>{//funcion anonima 
  'use strict'//modulo para hacer que el codigo sea mas estricto y por lo tanto mas seguro , ejemplo no me dejaria declarar una variable sin especificar si es constante o let
  // personajes = ['Dante','Dario','Yessi']; esto no funciona en modo stricto
  // const personajes = ['Dante','Dario','Yessi'];
  // console.log(personajes)
  let deck =[];
//   const tiposCartas = ['C','D','H','S'],
//         especiales = ['A','J','Q','K'];
  // let puntosJugador = 0,
  //     puntosComputadora = 0;
  let puntosJugadores = [];//optimizando puntos

  //Referencias de HTML

  const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

  const puntosHTML = document.querySelectorAll('small');
      //   divCartasJugador = document.querySelector('#jugador-cartas'),
      //   divCartasComputadora = document.querySelector('#computadora-cartas');
  const divCartasJugadores = document.querySelectorAll('.divCartas');

  
  // Crear baraja aleatorea
  deck = crearDeck();

  // Pedir Carta al azar 
  pedirCarta(deck);

  const iniciarJuego = (numJugadores = 2)=>{
      deck = crearDeck();

      puntosJugadores = [];
      for  ( let i = 0 ; i< numJugadores ; i++){
          puntosJugadores.push(0);
          
      }
      puntosHTML.forEach( elem => elem.innerText=0);
      divCartasJugadores.forEach(elem => elem.innerHTML='');

      btnDetener.disabled=false;
      btnPedir.disabled=false;
      
  
      console.log(puntosJugadores[puntosJugadores.length-1])
  
  
  }
  iniciarJuego();


  // pedirCarta();
  const valor = valorCarta(pedirCarta(deck));

  const acumularPuntos = (carta,turno) => {
      puntosJugadores[turno] += valorCarta(carta)
      puntosHTML[turno].innerText = puntosJugadores[turno];

      return puntosJugadores[turno];

  }

  

  const determinarGanador = ()=>{

      const [puntosMinimos,puntosComputadora]=puntosJugadores;
      setTimeout(()=>{
          if ( puntosComputadora === puntosMinimos){
              alert('Empate')
          } else if( puntosMinimos> 21){
              alert('Perdite ,Computadora gana');
                  
          }else if ( puntosComputadora > 21) {
              alert('Ganaste');
          }else{
              alert('Perdite ,Computadora gana');
          }

      },100);
  }
  //Turno Computadora 
  const turnoComputadora =( puntosMinimos )=>{
      let puntosComputadora = 0;
      do{
          const carta = pedirCarta(deck);
          // puntosComputadora += valorCarta(carta)
          // puntosHTML[1].innerText = puntosComputadora;
          puntosComputadora = acumularPuntos(carta,puntosJugadores.length-1);
          crearCarta(carta,puntosJugadores.length-1,divCartasJugadores);


          // const imgCarta = document.createElement('img');
          // imgCarta.src=`assets/cartas/${carta}.png`;
          // imgCarta.classList.add('m-1','col-2','col-md-1');
          // divCartasComputadora.append(imgCarta);

          // if ( puntosMinimos >21 ){
          //     break;

          // }
          

      }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <=21) ); 
      // setTimeout(()=>{
      //     if ( puntosComputadora === puntosMinimos){
      //         alert('Empate')
      //     } else if( puntosMinimos> 21){
      //         alert('Perdite ,Computadora gana');
                  
      //     }else if ( puntosComputadora > 21) {
      //         alert('Ganaste');
      //     }else{
      //         alert('Perdite ,Computadora gana');
      //     }

      // },100);

      determinarGanador();
      

  }

  //Eventos
  btnPedir.addEventListener('click',()=>{//cuando se coloca una funcion como argumento de otra funcion se llama callback
      
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos (carta ,0);
      crearCarta(carta,0,divCartasJugadores);
      // puntosJugador += valorCarta(carta)
      // puntosJugador = puntosJugador + valorCarta(carta)
      // puntosHTML[0].innerText = puntosJugador;
      // divCartasJugador.innerHTML=`<img src="assets/cartas/${carta}.png" class="m-1 col-2 col-md-1" alt="...">`
      // const imgCarta = document.createElement('img');
      // imgCarta.src=`assets/cartas/${carta}.png`;
      // imgCarta.classList.add('m-1','col-2','col-md-1');
      // divCartasJugadores.append(imgCarta)

      if ( puntosJugador > 21){
          btnPedir.disabled=true;
          btnDetener.disabled=true;
          turnoComputadora(puntosJugador);
      }else if (puntosJugador ===21){
          btnPedir.disabled=true;
          btnDetener.disabled=true;

          turnoComputadora(puntosJugador);

      }
  
  });


  btnDetener.addEventListener('click',( )=>{
      btnDetener.disabled=true;
      btnPedir.disabled=true;
      turnoComputadora(puntosJugadores[0]);
  });

  btnNuevo.addEventListener('click',( )=>{

      console.clear();
      iniciarJuego();
      // deck = [];
      // crearDeck();
      // puntosJugador = 0;
      // puntosComputadora = 0;
      // puntosHTML[0].innerText = 0;
      // puntosHTML[1].innerText = 0;
      // divCartasComputadora.innerHTML='';
      // divCartasJugador.innerHTML='';
      // btnDetener.disabled=false;
      // btnPedir.disabled=false;


  });

  return {
      nuevoJuego : iniciarJuego
  };
})();//PAra llamar la funcion despues de ser creada (funcion anonima autoinvocable(se ejecuta automaticamente) )


//opcion 2 con function
// (function (){
// })();
//crean un nuevo scope sin nombre , por lo tanto no es posible llamar el objeto ya que no se tiene un nombre referencial para llamarlo

