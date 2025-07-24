import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondayContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-40 pl-6 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList title={"TV Series"} movies={movies.tvSeries} />
        </div>
      </div>
    )
  )
};

export default SecondayContainer;