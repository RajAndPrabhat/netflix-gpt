import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  
  return (
    <div className="p-4 bg-black bg-opacity-90">
       <h1 className="text-xl text-white py-2 m-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
        {movies.map((movie) => (
          <MovieCard key={movie.id} poster_path={movie.poster_path} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
