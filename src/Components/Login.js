import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg'
                alt='background-image'/>
        </div>
        <form className='absolute w-3/12 p-12 mx-auto my-36 right-0 left-0 bg-black text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
            <input className='p-2 my-2 w-full bg-gray-900 bg-opacity-70 rounded-sm' type='text' placeholder='Email Address'/>
            <input className='p-2 my-2 w-full bg-gray-900 bg-opacity-70 rounded-sm' type='password' placeholder='Password'/>
            <button className='p-3 my-4 w-full bg-red-700 rounded-md'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
            <p className='py-4 cursor-pointer'>
                {isSignInForm ? 'New to Netflix? ': 'Already registered? '}
                <span onClick={toggleSignInForm} className='no-underline hover:underline'>{isSignInForm ? 'Sign Up now.' : 'Sign In now.'}</span></p>
        </form>
    </div>
  )
}

export default Login