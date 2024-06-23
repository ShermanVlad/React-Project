import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import React, {useEffect} from "react";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {Pagination} from "@mui/material";
import MovieListCard from "../../components/MovieListCard/MovieListCard";
import styles from './SearchedMoviesPage.module.css'


const SearchedMoviesPage = () => {
    const {query}= useParams()

    const {
        searchMovies,
        currentSearchPage,
        total_pages
    } = useAppSelector(state => state.movieSlice)

    const dispatch = useAppDispatch()

    const reloadPage = (page: number) => {
        dispatch(moviesActions.changeSearchPage(page))
    }

    useEffect(() => {
        if (query && currentSearchPage) {
            dispatch(moviesActions.searchedMovies({query, currentSearchPage}))
        }
    }, [currentSearchPage, query])

    return (
        <div  className={styles.MoviesPageDiv}>
            <div className={styles.paginDiv}>
                <Pagination page={currentSearchPage}
                            count={total_pages || 1}
                            onChange={(_, page: number) => reloadPage(page)}
                            shape={"rounded"}
                            color={"primary"}
                />
            </div>
            <div className={styles.searchedMoviesDiv}>
                {
                    searchMovies.length > 0 ? searchMovies.map(movie => <MovieListCard key={movie.id} movie={movie}/>) : <div className={styles.notFound}>`{query}` not found ...</div>
                }
            </div>
            <div className={styles.paginDiv}>
                <Pagination page={currentSearchPage}
                            count={total_pages || 1}
                            onChange={(_, page: number) => reloadPage(page)}
                            shape={"rounded"}
                            color={"primary"}
                />
            </div>
        </div>
    )
        ;
};

export default SearchedMoviesPage;