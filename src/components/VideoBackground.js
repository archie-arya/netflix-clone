import React, { useEffect, useState } from 'react';
import { api_options } from '../utils/constants';

const VideoBackground = ({ movieId }) => {
  const [trailerUrl, setTrailerUrl] = useState('');

  const getMainMoviePlay = async () => {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, api_options);

      const json = await data.json();
      //console.log(json);

      if (json.results && json.results.length > 0) {
        const trailerKey = json.results[0].key;
        const dynamicTrailerUrl = `https://www.youtube.com/embed/${trailerKey}?si=wvuXLROoeQJTB1Od&autoplay=1&mute=1`;
        setTrailerUrl(dynamicTrailerUrl);
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  useEffect(() => {
    getMainMoviePlay();
  }, [movieId]);

  return (
    <div>
      {trailerUrl && (
        <iframe className='w-screen aspect-video'
          src={trailerUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
