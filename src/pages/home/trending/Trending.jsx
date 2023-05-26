import { useDispatch, useSelector } from 'react-redux';
import CarouselSection from '../../../components/UI/carouselSections/CarouselSection';
import { useEffect, useState } from 'react';
import createFetchDataThunk from '../../../store/actions/data-actions';

const Trending = () => {
  const [trendingTab, setTrendingTab] = useState('day');
  const dispatch = useDispatch();

  const selectedTabHandler = tab => {
    setTrendingTab(tab === 'Day' ? 'day' : 'week');
  };
  useEffect(() => {
    const trendingThunk = createFetchDataThunk('trending');
    dispatch(trendingThunk(`/trending/all/${trendingTab}`));
  }, [trendingTab, dispatch]);
  const trendingMovies = useSelector(({ trending }) => trending.trendingMovies);

  return (
    trendingMovies && (
      <CarouselSection
        title="Trending"
        options={['Day', 'Week']}
        data={trendingMovies}
        onSelectTab={selectedTabHandler}
      />
    )
  );
};

export default Trending;
