import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_ICON } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const showGptSearch = useSelector(state => state.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate('/error');
    });
  }
  useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName}));
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });
        //Unsubscribe when component unmounts
        return () => unsubscribe();
    }, []);

  const handleGptSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
    
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  
  return (
    <div className="absolute w-screen pl-4 py-2 bg-gradient-to-b from-black z-10 flex px-[12%] sm:px-0 justify-between">
      <img
        className="w-32 sm:w-44 h-20"
        src={LOGO}
        alt="logo" />
      {user && (
        <div className="flex p-4 ml-10">
          {showGptSearch && (
            <select
              className="h-8 sm:h-auto w-13 sm:w-auto px-0 sm:px-4 sm:py-2 my-2 text-xs sm:text-lg bg-gray-900 text-white"
              onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}>
                  {lang.name}
                </option>
              )))}
            </select>)}
          <button
            className="h-8 sm:h-10 w-20 sm:w-28 text-xs sm:text-base whitespace-nowrap sm:py-2 px-2 sm:px-4 my-2 mx-4 bg-blue-800 text-white rounded-sm"
            onClick={handleGptSearchClick}>
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <div className="flex sm:block">
            <img
              className="w-8 sm:w-8 h-14 sm:h-8 pb-4 sm:pb-0 pt-2 sm:pb-0 sm:mx-5"
              alt="usericon"
              src={USER_ICON}
            />
            <button
              onClick={handleSignOut}
              className="m-2 sm:m-0 sm:pr-4 mb-5 font-bold text-white text-sm whitespace-nowrap"
            >(Sign Out)</button>
          </div>
          
      </div>)}
    </div>
  )
}

export default Header;