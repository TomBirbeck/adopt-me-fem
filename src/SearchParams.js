import { useState, useEffect, useContext } from 'react';
import Results from './Results';
import ThemeContext from './ThemeContext';
import useBreedList from './useBreedList';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [breeds] = useBreedList(animal);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    requestPets();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className='my-0 mx-auto w-11/12'>
      <form
        className='p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center'
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor='location'>
          Location
          <input
            className='w-60 mb-5 block'
            id='location'
            type='text'
            value={location}
            placeholder='Location'
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor='animal'>
          Animal
          <select
            className='w-60 mb-5 block'
            id='animal'
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed('');
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed('');
            }}
          >
            <option />
            {ANIMALS.map((animal) => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor='breed'>
          Breed
          <select
            className='w-60 mb-5 block disabled:opacity-10'
            id='breed'
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((breeds) => {
              return (
                <option key={breeds} value={breeds}>
                  {breeds}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor='theme'>
          Theme
          <select
            className='w-60 mb-5 block'
            value={theme}
            onChange={(e) => {
              setTheme(e.target.value);
            }}
            onBlur={(e) => {
              setTheme(e.target.value);
            }}
          >
            <option value='darkblue'>Dark Blue</option>
            <option value='green'>Green</option>
            <option value='mediumorchid'>Medium Orchid</option>
            <option value='red'>Red</option>
            <option value='orange'>Orange</option>
          </select>
        </label>
        <button
          className='rounded px-6 py-2 text-white hover:opacity-50 border-none'
          style={{ backgroundColor: theme }}
        >
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
