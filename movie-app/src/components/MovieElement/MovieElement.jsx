import './MovieElement.css';

const MovieElement = ( {movie, onRemoveMovie } ) => {
    const stars = [];

    for (let i = 0; i < movie.grade; i++) {
        stars[i] = (
        <img
            key={i}
            src="./public/img/star.png" 
            alt="Star"
        />
        );
    }
    
    return(
       <li>
            {movie.title}

            <img 
            src="./public/img/delete.png" 
            className="delete-movie-icon" 
            alt="Ta bort film" 
            onClick={() => onRemoveMovie(movie)}
            />
            
            {stars}
       </li>
    );
}

export default MovieElement;