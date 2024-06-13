import { useDispatch, useSelector } from "react-redux";
import { APP_OPTIONS } from "../utils/constants";
import { addUpcommingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcommingMovies = () => {
  const dispatch = useDispatch();
  const upcommingMovie = useSelector((store) => store.movie.upcommingMovies);
  const getUpcommingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      APP_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcommingMovies(json.results));
  };
  useEffect(() => {
    !upcommingMovie && getUpcommingMovies();
  }, []);
};
export default useUpcommingMovies;
