import { PlayIcon } from '@heroicons/react/24/solid';

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[30%] sm:pt-[24%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl sm:text-4xl font-bold">{title}</h1>
        <p className="hidden sm:inline-block py-6 w-1/2">{overview}</p>
        <div className='flex py-3 sm:py-0'>
            <button className="flex bg-white text-black py-2 px-6 text-lg rounded-md hover:bg-opacity-80">
                <PlayIcon className="w-6 h-6 text-black" /> Play
            </button>
            <button className="mx-2 bg-gray-500 text-white py-2 px-6 text-lg bg-opacity-50 rounded-md">
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle