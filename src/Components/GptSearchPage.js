import { BACKGROUND_IMG } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearchPage = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img
          className="brightness-50"
          src={BACKGROUND_IMG}
          alt='background-image' />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearchPage