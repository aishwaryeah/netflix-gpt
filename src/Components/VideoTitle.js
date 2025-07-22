
const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="py-6 w-1/2">{overview}</p>
        <div>
            <button className="bg-white text-black py-2 px-6 text-lg rounded-md hover:bg-opacity-80">
                ▶ Play
            </button>
            <button className="mx-2 bg-gray-500 text-white py-2 px-6 text-lg bg-opacity-50 rounded-md">
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle