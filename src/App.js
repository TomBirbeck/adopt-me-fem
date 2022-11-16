import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', { id: 'brand' }, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Destiny',
      animal: 'Cat',
      breed: 'Short-hair',
    }),
    React.createElement(Pet, {
      name: 'Sherlock',
      animal: 'Dog',
      breed: 'Shi-tzu',
    }),
    React.createElement(Pet, {
      name: 'Steve',
      animal: 'Frog',
      breed: 'Bull',
    })
  );
};

render(React.createElement(App), document.getElementById('root'));
