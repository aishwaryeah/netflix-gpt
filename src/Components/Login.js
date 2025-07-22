import { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_IMG } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleSignInBtnClick = () => {
    // Validate the form data 
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;

    //Sign In Sign Up logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            const {uid, email, displayName} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName}));
          }).catch((error) => {
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
          });
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
                src={BACKGROUND_IMG}
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
                ref={name}
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