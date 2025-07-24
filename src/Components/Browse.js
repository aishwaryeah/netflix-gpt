import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondayContainer from './SecondayContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTVSeries from '../hooks/useTVSeries';
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTVSeries();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondayContainer />
      {
        /*
          Main Container
          - VideoBackground
          - VideoTitle
          Secondary Container
          - MovieList * n
          - Cards * n
        */
      }
    </div>
  )
}

export default Browse