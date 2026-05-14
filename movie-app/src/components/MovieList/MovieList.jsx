import MovieElement from "../MovieElement/MovieElement";

const MovieList = ({ movies, onRemoveMovie }) => {
    return(
        <div>
            <h2>Filmer</h2>

            <ul className="movie-list">
                {movies.map((movie, index) => 
                    <MovieElement 
                      key={index} 
                      movie={movie}
                      onRemoveMovie={onRemoveMovie}
                    />
                )}
            </ul>
        </div>
    );
}

export default MovieList;