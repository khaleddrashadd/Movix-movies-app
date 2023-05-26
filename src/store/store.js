import { configureStore } from '@reduxjs/toolkit';
import SwitchTabSlice from './slices/switch-tab-slice';
import genresSlice from './slices/genres-slice';
import trendingDataSlice from "./slices/trending-slice";
import upcomingMoviesSlice from "./slices/upcoming-movies-slice";
import configUrlSlice from "./slices/config-url-slice";
import topRatedSlice from "./slices/top-rated-slice";
import popularSlice from "./slices/popular-slice";

const store = configureStore({
  reducer: {
    switchTab: SwitchTabSlice.reducer,
    genres: genresSlice.reducer,
    trending: trendingDataSlice.reducer,
    upcomingMovies: upcomingMoviesSlice.reducer,
    configUrl: configUrlSlice.reducer,
    topRated: topRatedSlice.reducer,
    popular: popularSlice.reducer,
  },
});

export default store;
