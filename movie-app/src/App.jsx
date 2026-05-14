import { useState } from 'react'
import Heading from './components/Heading/Heading';
import AddMovieForm from './components/AddMovieForm/AddMovieForm';
import MovieList from './components/MovieList/MovieList';
import OrderByAlphaButton from './components/OrderByAlphaButton/OrderByAlphaButton';
import OrderByGradeButton from './components/OrderByGradeButton/OrderByGradeButton';
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const removeMovie = (deletedMovie) => {
    setMovies(movies.filter(movie => movie !== deletedMovie));
  };

  const sortByAlpha = () => {
    const sortedAlphaMovies = [...movies].sort((a,b) => a.title.localeCompare(b.title));
    setMovies(sortedAlphaMovies);
  };

  const sortByGrade = () => {
    const sortedGradeMovies = [...movies].sort((a,b) => a.grade - b.grade);
    setMovies(sortedGradeMovies);
  };

  return (
    <main>
      <Heading 
        text="Min Filmlista" 
      />
      
      <AddMovieForm 
        onAddMovie={addMovie} 
      />

      <hr/>

      <MovieList 
        movies={movies} 
        onRemoveMovie={removeMovie}
      />
      
      <div className="d-flex justify-content-center gap-2 mt-3">
        <OrderByAlphaButton 
          onOrderByAlpha={sortByAlpha} 
        />
        
        <OrderByGradeButton 
          onOrderByGrade={sortByGrade}
        />
      </div>
    </main>
  );
}

export default App
