import Carousel from '../../carousel/Carousel';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import SwitchTabs from '../switchTabs/SwitchTabs';
import classes from './CarouselSection.module.scss';

const CarouselSection = (props) => {

  const { options, title, data, onSelectTab, endPoint } = props;

  return (
    <div className={classes['carousel-section']}>
      <ContentWrapper className="trending">
        <span className={classes['carousel-section__title']}>{title}</span>
        <SwitchTabs options={options} onSelectTab={onSelectTab} />
      </ContentWrapper>
      <Carousel data={data} endPoint={endPoint} />
    </div>
  );
};

export default CarouselSection;
