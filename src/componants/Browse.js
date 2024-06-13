import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainConatainer from "./MainConatainer";
import SecondryContainer from "./SecondryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopReatedMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies ";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();
  const gptSearchView = useSelector((store) => store.gpt.showGptSerach);
  return (
    <>
      <Header />
      {gptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainConatainer />
          <SecondryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
