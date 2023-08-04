import React from "react";
import "../StyleSheets/MovieCard.css";
import {Link} from "react-router-dom"
function MovieCard({ data }) {
  console.log("Movie data card", data);
  return (
    <Link to={`/movie/${data.imdbID}`}>
      <div
        className="movie"
        style={{
          backgroundImage: `url(${data.Poster})`,
        }}
      >
        <h2 className="movie__title">{data.Title}</h2>
        <span className="movie__description">{data.Type}</span>
        <div className="movie__infos">
          <div className="movie__duration">
            <span className="info__head">Duration</span>
            {data.Year}
          </div>
          <div className="movie__director">
            <span className="info__head">Director</span>
            {data.imdbID}
          </div>
          <div className="movie__year">
            <span className="info__head">Year</span>
            {data.year}
          </div>
          <div className="movie__cast">
            <span className="info__head">Cast</span>
            {/* {data.cast.map((actor) => (
             <p key={actor}>{actor}</p>
           ))} */}
          </div>
        </div>
        <div className="movie__imdb">
          {/* Assuming you have the Rating component and the imdbLink */}
          {/* Replace Rating component with your actual Rating component */}
          {/* <Rating rating={Math.round(data.rating)} /> */}
          <a href={data.Poster} className="movie__imdb-button" target="blank">
            {" "}
            IMDb{" "}
          </a>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
