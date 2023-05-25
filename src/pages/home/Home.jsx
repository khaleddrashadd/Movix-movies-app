import { useDispatch, useSelector } from 'react-redux';
import CarouselSection from '../../components/UI/carouselSections/CarouselSection';
import HeroBanner from './heroBanner/HeroBanner';
import classes from './Home.module.scss';
import Trending from './trending/Trending';
import { useEffect, useState } from 'react';
import createFetchDataThunk from '../../store/actions/data-actions';

const Home = () => {
  const { trendingMovies, popularMovies,topRatedMovies } = useSelector(state => state.data);
  const [trendingTab, setTrendingTab] = useState('day');
  const [popularTab, setPopularTab] = useState('movie');
  const [topRatedTab, setTopRatedTab] = useState('movie');
  const dispatch = useDispatch();

  const selectedTabHandler = tab => {
    if (tab) {
      tab.type === 'trending/Day' && setTrendingTab('day');
      tab.type === 'trending/Week' && setTrendingTab('week');
      tab.type === 'popular/Movies' && setPopularTab('movie');
      tab.type === 'popular/TV Show' && setPopularTab('tv');
      tab.type === 'topRated/Movies' && setTopRatedTab('movie');
      tab.type === 'topRated/TV Show' && setTopRatedTab('tv');
    }
  };
  useEffect(() => {
    const trendingThunk = createFetchDataThunk('trending');
    dispatch(trendingThunk(`/trending/all/${trendingTab}`));
  }, [trendingTab, dispatch]);

  useEffect(() => {
    const popularThunk = createFetchDataThunk('popular');
    dispatch(popularThunk(`/${popularTab}/popular`));
  }, [popularTab, dispatch]);
  useEffect(() => {
    const topRatedThunk = createFetchDataThunk('topRated');
    dispatch(topRatedThunk(`/${topRatedTab}/top_rated`));
  }, [topRatedTab, dispatch]);

  return (
    <div>
      <HeroBanner />
      <CarouselSection
        title="Trending"
        options={{ type: 'trending', value: ['Day', 'Week'] }}
        data={trendingMovies}
        onSelectTab={selectedTabHandler}
      />
      <CarouselSection
        title="What's Popular"
        options={{ type: 'popular', value: ['Movies', 'TV Show'] }}
        data={popularMovies}
        onSelectTab={selectedTabHandler}
        endPoint={popularTab}
      />
      <CarouselSection
        title="Top Rated"
        options={{ type: 'topRated', value: ['Movies', 'TV Show'] }}
        data={topRatedMovies}
        onSelectTab={selectedTabHandler}
        endPoint={topRatedTab}
      />
    </div>
  );
};

export default Home;
