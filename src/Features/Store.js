import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../Features/movies/movieSlice";
export const store = configureStore({
    reducer: {
        movies: moviesReducer
    },
});
