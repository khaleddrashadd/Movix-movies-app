import { useEffect } from 'react';
import Carousel from '../../../components/carousel/Carousel';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/contentWrapper/switchTaps/SwitchTabs';
import classes from './Trending.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import createFetchDataThunk from '../../../store/actions/data-actions';

const displayOptions = ['Day', 'Week'];

const Trending = () => {
  const dispatch = useDispatch();
  const { selectedTab } = useSelector(state => state.switchTab);

  useEffect(() => {
    const trendingThunk = createFetchDataThunk('trending');
    dispatch(trendingThunk(`/trending/all/${selectedTab}`));
  }, [selectedTab, dispatch]);

  return (
    <div className={classes['carousel-section']}>
      <ContentWrapper className="trending">
        <span className={classes['carousel-section__title']}>Trending</span>
        <SwitchTabs options={displayOptions} />
      </ContentWrapper>
      <Carousel />
    </div>
  );
};

export default Trending;
