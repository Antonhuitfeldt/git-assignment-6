import { useState } from 'react'
import Heading from './components/Heading/Heading';
import AddMovieForm from './components/AddMovieForm/AddMovieForm';
import MovieList from './components/MovieList/MovieList';
import MovieElement from './components/MovieElement/MovieElement';
import OrderByAlphaButton from './components/OrderByAlphaButton/OrderByAlphaButton';
import OrderByGradeButton from './components/OrderByGradeButton/OrderByGradeButton';
import './App.css'

function App() {

  return (
    <main>
      <Heading text="Min Filmlista" />
      <AddMovieForm/>
      <hr/>
      <MovieList/>
      <MovieElement/>
      <div className="d-flex justify-content-center gap-2 mt-3">
        <OrderByAlphaButton />
        <OrderByGradeButton />
      </div>
    </main>
  );
}

export default App
