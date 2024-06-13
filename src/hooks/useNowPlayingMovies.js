import { useDispatch, useSelector } from "react-redux";
import { APP_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  // Fetch Movie Data from TMDB
  const dispatch = useDispatch();
  const nowPlayingMovie = useSelector((store) => store.movie.nowPlayingMovies);
  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      APP_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    !nowPlayingMovie && nowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
