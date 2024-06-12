import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainConatainer = () => {
    const movies=useSelector(store=>store.movie?.nowPlayingMovies);
    if (!movies) return;

    const mainMovie=movies[1];
    const {original_title, overview, id}=mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainConatainer
