import Carousel from '../../../components/carousel/Carousel';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/contentWrapper/switchTaps/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import classes from './Trending.module.scss';
import { useSelector } from 'react-redux';

const displayOptions = ['Day', 'Week'];

const Trending = () => {
  const switchTab = useSelector(state => state.switchTab);
  const { selectedTab } = switchTab;
  const { data, isloading } = useFetch(`/trending/all/${selectedTab}`);

  return (
    <div className={classes['carousel-section']}>
      <ContentWrapper className="trending">
        <span className={classes['carousel-section__title']}>Trending</span>
        <SwitchTabs options={displayOptions} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={isloading} />
    </div>
  );
};

export default Trending;
