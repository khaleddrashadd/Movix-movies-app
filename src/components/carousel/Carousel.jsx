import classes from './Carousel.module.scss';
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import CarouselItems from './CarouselItems';
import { useSelector } from 'react-redux';
const Carousel = () => {
  const { isLoading } = useSelector(state => state.trending);

  const loadingSkeleton = () => {
    return (
      <div className={classes['skeleton-item']}>
        <div className={`${classes['skeleton-item__poster']} skeleton`}></div>
        <div className={classes['skeleton-item__text']}>
          <div className={`${classes['skeleton-item__title']} skeleton`}></div>
          <div className={`${classes['skeleton-item__date']} skeleton`}></div>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.carousel}>
      <ContentWrapper className="carousel">
        <BsFillArrowLeftCircleFill
          className={`${classes.carouselLeftNav} ${classes.arrow}`}
        />
        <BsFillArrowRightCircleFill
          className={`${classes.carouselRighttNav} ${classes.arrow}`}
        />
        {!isLoading ? (
          <CarouselItems />
        ) : (
          <div className={classes['loading-skeleton']}>
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
