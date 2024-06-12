import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainConatainer from "./MainConatainer";
import SecondryContainer from "./SecondryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopReatedMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies ";



const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies()
  return (
    <div>
      <Header />
      <MainConatainer />
      <SecondryContainer />
    </div>
  );
};

export default Browse;
