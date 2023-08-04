import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies ,getAllShows} from '../Features/movies/movieSlice'
import MovieCard from './MovieCard'


function MovieListing() {
  const movies = useSelector(getAllMovies)
  const Shows = useSelector(getAllShows)
  
  let renderMovies;
  let renderShows;
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, ind) => (
        <MovieCard key={ind} data={movie} />
      ))
    ) : (
      <div className="text-danger">
        <h3>No Data</h3>
      </div>
    );
  
  
   renderShows =
     Shows.Response === "True" ? (
       Shows.Search.map((movie, ind) => <MovieCard key={ind} data={movie} />)
     ) : (
       <div className="text-danger">
         <h3>No Data</h3>
       </div>
     );
  
  console.log(renderMovies)

  return (
    <div className="movie-wrapper container">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movieContainer d-flex flex-wrap justify-content-center gap-4 align-items-center ">
          {renderMovies}
        </div>

        <h2>Shows</h2>
        <div className="movieContainer d-flex flex-wrap justify-content-center gap-4 align-items-center ">
          {renderShows}
        </div>
      </div>
    </div>
  );
}

export default MovieListing