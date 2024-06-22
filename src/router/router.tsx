import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import React from "react";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import SearchedMoviesPage from "../pages/searchedMoviesPage/SearchedMoviesPage";
import MoviesPage from "../pages/moviesPage/MoviesPage";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <MoviesPage/>},
            {path: 'movieInfo/:id', element: <MovieInfo/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: '/search/:query', element: <SearchedMoviesPage/>}
        ]
    }
])

export default router;