import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name={'Destiny'} animal={'Cat'} breed={'Short-hair'} />
      <Pet name={'Sherlock'} animal={'Dog'} breed={'Shi-tzu'} />
      <Pet name={'Steve'} animal={'Frog'} breed={'Bull'} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
