import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {  
  useMovieTrailer(movieId);    
  const movieTrailer = useSelector((store) => store.movie?.movieTrailer);
  
  return (
    <div className="w-screen">
      <iframe 
      className="w-screen aspect-video"       
        src={"https://www.youtube.com/embed/"+movieTrailer?.key+"?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&loop=1"}
        title="YouTube video player"                   
      ></iframe>
    </div>
  );
};

export default VideoBackground;
