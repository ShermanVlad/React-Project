import {useAppSelector} from "../../redux/store";
import MovieListCard from "../MovieListCard/MovieListCard";
import styles from './MoviesList.module.css'
import {FC} from "react";

const MoviesList: FC = () => {

    let {isLoaded, movies}=useAppSelector(state => state.movieSlice)

    return (
        <div className={styles.mainDiv}>
            {
                isLoaded? movies?.map(movie => <MovieListCard key={movie.id} movie={movie}/>) : <div>loading ...</div>
            }
        </div>
    );
};

export default MoviesList;