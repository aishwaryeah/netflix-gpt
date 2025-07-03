import { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleSignInBtnClick = () => {
    // Validate the form data 
    const message = checkValidData(email.current.value, password.current.value);
    console.log(email.current.value + password.current.value)
    setErrorMessage(message);
    if(message) return;

    //Sign In Sign Up logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user); 
        })
        .catch((error) => { 
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user); 
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg'
                alt='background-image'/>
        </div>
        <form 
          onSubmit={(e)=> e.preventDefault()}
          className='absolute w-3/12 p-12 mx-auto my-36 right-0 left-0 bg-black text-white rounded-lg bg-opacity-80'>
          <h1 
            className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}
          </h1>
          {!isSignInForm &&(
            <input 
                className='p-2 my-2 w-full bg-gray-900 bg-opacity-70 rounded-sm' 
                type='text' 
                placeholder='Full Name'/>
            )}
            <input 
              ref={email}
              className='p-2 my-2 w-full bg-gray-900 bg-opacity-70 rounded-sm' 
              type='text' 
              placeholder='Email Address'/>
            <input 
              ref={password}
              className='p-2 my-2 w-full bg-gray-900 bg-opacity-70 rounded-sm' 
              type='password' 
              placeholder='Password'/>
            <p className='text-red-500 font-bold text-sm'>{errorMessage}</p>
            <button 
              className='p-3 my-4 w-full bg-red-700 rounded-md'
              onClick={handleSignInBtnClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
            <p className='py-4 cursor-pointer'>
                {isSignInForm ? 'New to Netflix? ': 'Already registered? '}
                <span onClick={toggleSignInForm} className='no-underline hover:underline'>{isSignInForm ? 'Sign Up now.' : 'Sign In now.'}</span></p>
        </form>
    </div>
  )
}

export default Login