import React, {FC, useEffect} from 'react';
import {IMovie} from "../../models/IMovie";
import styles from './MovieListCard.module.css'
import PosterPreview from "../PosterPreview/PosterPreview";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {Link} from "react-router-dom";
import GenreBadge from '../GenreBadge/GenreBadge';
import {moviesActions} from "../../redux/slices/moviesSlice";
import {IGenre} from "../../models/IGenre";

type IProps = {
    movie: IMovie;
}

const MovieListCard: FC<IProps> = ({movie}) => {

    const {id, poster_path,title, release_date, vote_average, genre_ids}=movie

    const {genres}=useAppSelector(state => state.movieSlice)

    const dispatch=useAppDispatch()
    useEffect(() => {
        dispatch(moviesActions.getAllGenres())
    }, []);
    const findMovieGenre = (id: number)=>{
        const movieGanre = genres.find(genre=>genre.id===id)
        return movieGanre
    }

    return (
        <div className={styles.movieDiv}>

            <Link to={`/movieInfo/${id}`} className={styles.link} state={{...movie}}>
                <div className={styles.genreBadgesDiv}>
                    {
                        // genre_ids.map(id=> <Link to={`/movies/${id}`} style={{textDecoration: "none"}} key={id+1}><GenreBadge genre={findMovieGenre(id)} key={id}/></Link>)
                        genre_ids.map(id=><GenreBadge genre={findMovieGenre(id)} key={id}/>)

                    }
                </div>
                <PosterPreview posterPath={poster_path} movieTitle={title}/>
                <h3>{title}</h3>
                <div className={styles.descDiv}>
                    <p>{release_date}, IMDb: <b>{vote_average.toFixed(1)}</b></p>
                    <img src="/star-96.png" alt="star"/>
                </div>
            </Link>
        </div>
    );
};

export default MovieListCard;