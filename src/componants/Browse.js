import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainConatainer from "./MainConatainer";
import SecondryContainer from "./SecondryContainer";


const Browse = () => {
  const nowPlayingMovies=useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainConatainer />
      <SecondryContainer />
    </div>
  );
};

export default Browse;
