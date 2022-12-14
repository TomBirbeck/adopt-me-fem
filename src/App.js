import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { StrictMode, useState } from 'react';
import SearchParams from './SearchParams.js';
import Details from './Details.js';
import ThemeContext from './ThemeContext.js';

const App = () => {
  const theme = useState('green');
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div
          className='p-0 m-0'
          style={{
            background:
              'url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)',
          }}
        >
          <BrowserRouter>
            <header className='w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500'>
              <Link to='/' className='text-6xl text-white hover:text-7xl'>
                Adopt Me!
              </Link>
            </header>
            <Routes>
              <Route path='/details/:id' element={<Details />} />
              <Route path='/' element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));
