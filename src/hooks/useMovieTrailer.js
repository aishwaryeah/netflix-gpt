import { useEffect} from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo = useSelector(store => store.movies.trailerVideo);
    
    const getMovieTrailer = async () => {
        console.log(movieId);
        console.log(API_OPTIONS);
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const jsonData = await data.json();
        const filterData = jsonData.results.filter((video) => video.type === 'Trailer');
        const trailer = filterData.length ? filterData[0] : jsonData.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(() => {
        !trailerVideo && getMovieTrailer();
    }, []);
}

export default useMovieTrailer;