import { useDispatch, useSelector } from 'react-redux';
import CarouselSection from '../../../components/UI/carouselSections/CarouselSection';
import { useEffect, useState } from 'react';
import createFetchDataThunk from '../../../store/actions/data-actions';

const Popular = () => {
  const [popularTab, setPopularTab] = useState('movie');

  const dispatch = useDispatch();
  const selectedTabHandler = tab => {
    console.log(tab);
    setPopularTab(tab === 'Movies' ? 'movie' : 'tv');
  };
  useEffect(() => {
    const popularThunk = createFetchDataThunk('popular');
    dispatch(popularThunk(`/${popularTab}/popular`));
  }, [popularTab, dispatch]);
  const { popularMovies } = useSelector(({ popular }) => popular);
  return (
    <CarouselSection
      title="What's Popular"
      options={['Movies', 'TV Show']}
      data={popularMovies}
      onSelectTab={selectedTabHandler}
      endPoint={popularTab}
    />
  );
};

export default Popular;
