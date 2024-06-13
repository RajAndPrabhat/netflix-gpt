import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { APP_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const languagekey = useSelector((store) => store.config.lang);
  const search=useRef(null);
  const dispatch=useDispatch();
  const searchMovieTMBD=async(movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", APP_OPTIONS);
    const json=await data.json();    
    return json.results;
  };
  const handleGptsearch=async ()=>{
    const getQuery="Act as a Movie Recommendation system and suggest some movies for the query : "+search.current.value+" and give me names of 5 movies, comma seprated like the example result given ahead. Example Result : Gadar, Sholay, Don, Golmal, Koi Mil Gaya";
    
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
  return (
    <div className="pt-[15%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>{e.preventDefault(e);}}>
        <input
            ref={search}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[languagekey].searchPlaceholder}
        />
        <button className="bg-red-700 m-4 py-2 px-4 rounded-md text-white col-span-3" onClick={handleGptsearch}>
          {lang[languagekey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
