import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
    const movies=useSelector(store=>store.movie);
   
     
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
      { movies.nowPlayingMovies && <MovieList title="Now Palying" movies={movies.nowPlayingMovies}/>}
      { movies.topRatedMovies && <MovieList title="Top Rated Movies" movies={movies.topRatedMovies}/>}
      { movies.popularMovies && <MovieList title="Popular Movies" movies={movies.popularMovies}/>}
      { movies.upcommingMovies && <MovieList title="Upcomming Movies" movies={movies.upcommingMovies}/>}
      {/*{ movies.nowPlayingMovies && <MovieList title="Horror Movies" movies={movies.nowPlayingMovies}/>}
      { movies.nowPlayingMovies && <MovieList title="Now Palying" movies={movies.nowPlayingMovies}/>} */}
      </div>
    </div>
  )
}

export default SecondryContainer
