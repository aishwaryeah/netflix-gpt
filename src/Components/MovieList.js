import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
  return (
    <div className="px-6">
      <h1 className="text-md sm:text-2xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar scrollbar-thumb-black scrollbar-track-black">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList;