import React from "react";
import { MOVIE_IMG_CDN } from "../utils/constants";

const MovieCard = ({poster_path}) => {
   return (
    <div className="pr-4 w-48">
      <img 
      alt="Movie" src={MOVIE_IMG_CDN+poster_path} />
    </div>
  );
};

export default MovieCard;
