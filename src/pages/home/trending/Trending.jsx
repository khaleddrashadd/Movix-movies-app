import { useEffect } from 'react';
import Carousel from '../../../components/carousel/Carousel';
import ContentWrapper from '../../../components/UI/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/UI/switchTabs/SwitchTabs';
import classes from './Trending.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import createFetchDataThunk from '../../../store/actions/data-actions';

const trendingOptions =  ['Day', 'Week'];

const Trending = () => {
  const dispatch = useDispatch();
  const { selectedTrendingTab } = useSelector(state => state.switchTab);

  // useEffect(() => {
  //   const trendingThunk = createFetchDataThunk('trending');
  //   dispatch(trendingThunk(`/trending/all/${selectedTrendingTab}`));
  // }, [selectedTrendingTab, dispatch]);

  return (
    <div className={classes['carousel-section']}>
      <ContentWrapper className="trending">
        <span className={classes['carousel-section__title']}>Trending</span>
        <SwitchTabs options={trendingOptions} />
      </ContentWrapper>
      <Carousel />
    </div>
  );
};

export default Trending;
