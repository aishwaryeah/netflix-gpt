import { BACKGROUND_IMG } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearchPage = () => {
  return (
    <div >
      <div className='fixed -z-10'>
        <img
          className="brightness-50 h-screen w-screen object-cover"
          src={BACKGROUND_IMG}
          alt='background-image' />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  )
}

export default GptSearchPage