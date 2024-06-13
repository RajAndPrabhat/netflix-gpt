import { useDispatch } from "react-redux";
import { APP_OPTIONS } from "../utils/constants";
import openai from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";

const useSearchGptMovie = async (movie) => {
  const dispatch = useDispatch();
  const searchMovieTMBD = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      APP_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const getQuery="Act as a Movie Recommendation system and suggest some movies for the query : "+movie+" and give me names of 5 movies, comma seprated like the example result given ahead. Example Result : Gadar, Sholay, Don, Golmal, Koi Mil Gaya";
    
    const gptResults=await openai.chat.completions.create({
        messages: [{ role: 'user', content: getQuery }],
        model: 'gpt-3.5-turbo',
      });
    if(!gptResults.choices) return ;
    const gptMovies=gptResults.choices?.[0]?.message?.content.split(","); 
    const promiseArray= gptMovies.map((movie)=>searchMovieTMBD(movie));    
    const tmdbResults=await Promise.all(promiseArray);     
    dispatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbResults}));
};
export default useSearchGptMovie;
