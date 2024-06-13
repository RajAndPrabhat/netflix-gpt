import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, moviesResults } = gpt;
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-balck text-white">
      {movieNames.map((moviename, index) => 
        <MovieList key={moviename} title={moviename} movies={moviesResults[index]} />        
      )}
    </div>
  );
};

export default GptMovieSuggestions;
