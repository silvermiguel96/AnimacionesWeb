import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './css/invie.css';
import './css/animation.css';

import Invie from './Invie';
import cheet from 'cheet.js';
import * as serviceWorker from './serviceWorker';

// Images 
import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png'
import easteA from './images/easter-a.png';
import easteB from './images/easter-b.png';

import { Provider } from 'react-redux'; // Que provee de datos a el servidor
import { createStore } from 'redux'; // Redux como tal maneja una creacion en el store

const inicialstate = {
  menu:[
    {
      href: 'index.html',
      title: 'Home',
    },
    {
      href: '#guitarras',
      title: 'Guitarras',
    },
    {
      href: 'precios.html',
      title: 'Precios',
    }
  ],
  logoPortada: logoPortada,
  guitarras : [
    {
      imagen: acustica,
      alt: 'Guitarra Invie Acustica',
      name: 'Invie Acustica',
      features: [
        'Estilo vintage',
        'Madera pura',
        'Incluye estuche invisible de aluminio',
      ]
    },
    {
      imagen: classic,
      alt: 'Guitarra Invie Classic',
      name: 'Invie Classic',
      features: [
        'Estilo vintage',
        'Liviana',
        'Empieza tu camino como Rockstart',
      ]
    }
  ]
}

function reducer(state, action) {
  switch(action.type) {
    case 'UPDATE_PROPS': {
      const newProps = action.payload.props;
      return {...state, ...newProps}
      // Sprint operation 
    }
    default:
    return state
  }
}
// const store = createStore(reducer , inicialStore); La funcion cambia por el reducer .
const store = createStore(reducer, inicialstate);

const easter = {
  menu:[
    {
      href: 'index.html',
      title: 'Home',
    },
  ],
  // logoPortada: logoPortada,
  guitarras : [
    {
      imagen: easteA,
      alt: 'Guitarra Invie Acustica',
      name: 'Invie Familiar',
      features: [
        'Listo para copiar a los Simpsons',
        'Aire puro',
        'Chistes malos',
      ]
    },
    {
      imagen: easteB,
      alt: 'Guitarra Invie Classic',
      name: 'Invie Classic',
      features: [
        'Estilo vintage',
        'Liviana',
        'Empieza tu camino como Rockstart',
      ]
    }
  ]
}
cheet('i n v i e', () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: easter
    }
  });
});
cheet('g o b a c k' , ()=> {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: inicialstate
    }
  });
});


ReactDOM.render(
  <Provider store={store}>
    <Invie />
  </Provider>,
  document.getElementById('root')
  );

serviceWorker.unregister();
