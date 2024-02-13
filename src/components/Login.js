import React from 'react'
import Header from './Header';
import { useState } from 'react';

const Login = () => {
  const[isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header classname="w-3"/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt ="netflix-bg"></img>
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'></input>)}
        <input type="text" placeholder='Email Adress' className='p-4 my-4 w-full bg-gray-700'></input>
        <input type="password" placeholder="Password" className='p-4 my-4 w-full bg-gray-700'></input>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm? "Sign In" : "Sign Up"}</button>
        <p className='p-4 my-2 text-xl cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already have an account? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login
