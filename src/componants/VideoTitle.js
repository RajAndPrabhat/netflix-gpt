import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[25%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg py-4 w-1/3">{overview}</p>
      <div>
        <button className="text-black bg-white font-bold text-lg w-36 py-2 rounded-md hover:bg-opacity-80">Play</button>
        <button className="mx-4 text-white bg-gray-500 font-bold text-lg w-36 py-2 rounded-md hover:bg-opacity-80">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;
