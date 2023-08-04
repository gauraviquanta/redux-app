import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../Common/apis/movieApi";
import { APIKEY } from "../../Common/movieApiKeys";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "harry";
    const response = await movieApi
      .get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log(`Home page error ---- ${err}`);
      });
    console.log("Response from api", response);
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "shows/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";
    const response = await movieApi
      .get(`?apiKey=${APIKEY}&s=${seriesText}&type=series`)
      .catch((err) => {
        console.log(`Home page error ---- ${err}`);
      });
    console.log("Response from api", response);
    return response.data;
  }
);
export const fetchAsyncShowsOrMovieDetails = createAsyncThunk(
  "shows/fetchAsyncShowsOrMovieDetails",
    async (id) => {
      console.log("iddd", id)
    const response = await movieApi
      .get(`?apiKey=${APIKEY}&i=${id}&Plot=full`)
      .catch((err) => {
        console.log(`Home page error ---- ${err}`);
      });
    console.log("Response from api", response);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
   
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Pending");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },

    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fetched succesfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncShowsOrMovieDetails.fulfilled]: (state, { payload }) => {
      console.log("fetched succesfully");
      return { ...state, selectMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllShowOrMovieDetail = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
