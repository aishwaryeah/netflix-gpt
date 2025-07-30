import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react";
import geminiai from "../utils/geminiAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // Search movie from database
  const searchMovieDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1",
      API_OPTIONS);
      const json = await data.json();

      return json.results;
  }

  const handleGptSearchClick= async() => {
    //Make an API call to GPT API and get the Movie Results
    const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query : " + searchText.current.value + ". Only give me the names of 5 Movies, comma separated like the example result given ahead. Example Result: Superman, Don, Sholay, Golmaal, Koi Mil Gaya";

    const gptResults = await geminiai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: gptQuery,
    });
    const gptMovies = gptResults.text.replace(/,\s+/g, ",").split(",");

    //For each movie, search DB API
    const promiseArray = gptMovies.map(movie => searchMovieDB(movie));
    //When all the promises gets resolved, only then we will get the data
    const tmdbResults = await Promise.all(promiseArray);
    // const filteredMovieList = tmdbResults.map((results, index) => {
    //   const movieName = gptMovies[index];
    //   return results.find(movie => movie.title === movieName);
    // });
    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
  }
  return (
    <div className="pt-[20%] sm:pt-[7%] flex justify-center">
      <form
        className="w-full pr-4 sm:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 h-10 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 my-4 h-10 col-span-3 bg-red-700 text-white rounded-sm"
          onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar