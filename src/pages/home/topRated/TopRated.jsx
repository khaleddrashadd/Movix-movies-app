import { useDispatch, useSelector } from 'react-redux';
import CarouselSection from '../../../components/UI/carouselSections/CarouselSection';
import { useEffect, useState } from 'react';
import createFetchDataThunk from '../../../store/actions/data-actions';

const TopRated = () => {
  const [topRatedTab, setTopRatedTab] = useState('movie');

  const dispatch = useDispatch();
  const selectedTabHandler = tab => {
    setTopRatedTab(tab === 'Movies' ? 'movie' : 'tv');
  };
  useEffect(() => {
    const topRatedThunk = createFetchDataThunk('topRated');
    dispatch(topRatedThunk(`/${topRatedTab}/top_rated`));
  }, [topRatedTab, dispatch]);
  const { topRatedMovies } = useSelector(({ topRated }) => topRated);
  return (
    <CarouselSection
      title="Top Rated"
      options={['Movies', 'TV Show']}
      data={topRatedMovies}
      onSelectTab={selectedTabHandler}
      endPoint={topRatedTab}
    />
  );
};

export default TopRated;
