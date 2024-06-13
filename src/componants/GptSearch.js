import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BACKGROUND_IMAGE_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
        <div className="fixed -z-10">
            <img 
            className=""
            src={BACKGROUND_IMAGE_URL}
            alt="Background"
            />
        </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </>
  )
}

export default GptSearch;
