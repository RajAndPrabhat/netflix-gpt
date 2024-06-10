import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSinInForm, setIsSinInForm]=useState(true);

  const toggleSignInForm=()=>{
    setIsSinInForm(!isSinInForm);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Background"/>
      </div>    
    <form className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-6 left-6 text-white bg-opacity-80">
      <h1 className="font-bold text-3xl my-3">{isSinInForm?"Sign In":"Sign Up"}</h1>
      {!isSinInForm  && 
      <input type="text" placeholder='Full Name' className="p-2 m-2 w-full bg-gray-800" />
      }   
      <input type="text" placeholder="Email Id" className="p-2 m-2 w-full bg-gray-800" />
      <input type="password" placeholder="Password" className="p-2 m-2 w-full bg-gray-800"/>
      <button className="p-2 m-2 bg-red-800 w-full rounded-md">{isSinInForm?"Sign In":"Sign Up"}</button>
      
      <p className='px-4 cursor-pointer' onClick={toggleSignInForm}>
      {!isSinInForm?"Already Registered? Sign In" : "New to Netflix? Sign Up now"}
        
      </p>
    </form>

    </>
  )
}

export default Login;
