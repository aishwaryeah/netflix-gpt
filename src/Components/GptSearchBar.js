import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  return (
    <div className="pt-[7%] flex justify-center">
        <form className="w-1/2 grid grid-cols-12">
            <input
                type="text"
                className="p-4 m-4 h-10 col-span-9"
                placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button className="py-2 px-4 my-4 h-10 col-span-3 bg-red-700 text-white rounded-sm">
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar