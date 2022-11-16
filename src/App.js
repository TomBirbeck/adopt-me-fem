const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById('root'));
