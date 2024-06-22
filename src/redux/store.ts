import {configureStore} from "@reduxjs/toolkit";
import {moviesSlice} from "./slices/moviesSlice";
import {useDispatch, useSelector} from "react-redux";

export const store=configureStore({
    reducer: {
        movieSlice: moviesSlice.reducer
    }
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();