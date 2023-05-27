import { configureStore } from '@reduxjs/toolkit';
import SwitchTabSlice from './slices/switch-tab-slice';
import genresSlice from './slices/genres-slice';
import trendingDataSlice from "./slices/trending-slice";
import upcomingMoviesSlice from "./slices/upcoming-movies-slice";
import configUrlSlice from "./slices/config-url-slice";
import topRatedSlice from "./slices/top-rated-slice";
import popularSlice from "./slices/popular-slice";
import detailsSlice from "./slices/details-slice";
import creditsSlice from "./slices/credits-slice";
import videosSlice from "./slices/videos-slice";
import similarSlice from "./slices/similar-slice";
import recommendationSlice from "./slices/recommendation-slice";

const store = configureStore({
  reducer: {
    switchTab: SwitchTabSlice.reducer,
    genres: genresSlice.reducer,
    trending: trendingDataSlice.reducer,
    upcomingMovies: upcomingMoviesSlice.reducer,
    configUrl: configUrlSlice.reducer,
    topRated: topRatedSlice.reducer,
    popular: popularSlice.reducer,
    details: detailsSlice.reducer,
    credits: creditsSlice.reducer,
    videos: videosSlice.reducer,
    similar: similarSlice.reducer,
    recommendation: recommendationSlice.reducer,
  },
});

export default store;
