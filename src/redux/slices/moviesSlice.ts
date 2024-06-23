import {IMovie} from "../../models/IMovie";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService/movies.api.service";
import {AxiosError} from "axios";
import {IGenre} from "../../models/IGenre";
import {genresService} from "../../services/genresService/genres.api.service";

type MoviesSliceType = {
    movies: IMovie[];
    genres: IGenre[];
    searchMovies: IMovie[],
    currentPage: number;
    currentSearchPage: number;
    total_pages: null | number;
    isLoaded: boolean;
    darkMode: boolean
}

const initialState: MoviesSliceType = {
    movies: [],
    genres: [],
    searchMovies: [],
    currentPage: 1,
    currentSearchPage: 1,
    total_pages: null,
    isLoaded: false,
    darkMode: false
}

const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async (page: number, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await moviesService.getMovies(page));
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);

const searchedMovies = createAsyncThunk(
    'moviesSlice/searchedMovies',
    async ({query,currentSearchPage}: { query: string, currentSearchPage:number}, thunkAPI) => {
        try {
            return thunkAPI.fulfillWithValue(await moviesService.getSearchedMovies(query,currentSearchPage))
        } catch (e) {
            const error = e as AxiosError;
            thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);

const getAllGenres = createAsyncThunk(
    'moviesSlice/getAllGenres',
    async (_, thunkApi) => {
        try {
            return thunkApi.fulfillWithValue(await genresService.getGenres())
        } catch (e) {
            const error = e as AxiosError;
            thunkApi.rejectWithValue(error.response?.data)
        }
    }
);


export const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        changeSearchPage: (state, action:PayloadAction<number>) => {
            state.currentSearchPage = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                if (action.payload) {
                    const {results, page, total_pages} = action.payload;
                    state.movies = results
                    state.currentPage = page
                    state.total_pages = total_pages
                    state.isLoaded = true
                }
            })
            .addCase(getAllGenres.fulfilled, (state, action) => {
                if (action.payload) {
                    const {genres} = action.payload
                    state.genres = genres
                }
            })
            .addCase(searchedMovies.fulfilled, (state, action) => {
                if (action.payload) {
                    const {results,page,total_pages} = action.payload
                    state.searchMovies=results
                    state.currentPage=page
                    state.total_pages=total_pages
                    state.isLoaded=true
                }
            })
})

export const moviesActions = {
    ...moviesSlice.actions,
    getAllMovies,
    getAllGenres,
    searchedMovies
};