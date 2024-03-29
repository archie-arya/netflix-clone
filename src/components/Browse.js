import React, { useEffect } from 'react'
import Header from './Header'
import {api_options} from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import MainContainer from './MainContainer.js'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {

  const dispatch = useDispatch();
  const getNowPlayingMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', api_options);
    const json = await data.json();
    //console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
    //console.log(dispatch);

  };

  useEffect(()=>{
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
