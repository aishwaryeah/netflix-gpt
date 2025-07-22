import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondayContainer from './SecondayContainer';

const Browse = () => {
  useNowPlayingMovies();
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