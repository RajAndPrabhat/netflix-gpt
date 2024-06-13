import { useDispatch, useSelector } from "react-redux";
import { APP_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movie.movieTrailer);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      APP_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((movie) => movie.type === "Trailer");
    const movieTrailer = filterData.length ? filterData[0] : json[0];
    dispatch(addMovieTrailer(movieTrailer));
  };
  useEffect(() => {
    !movieTrailer && getMovieVideos();
  }, []);
};
export default useMovieTrailer;
