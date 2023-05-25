import classes from './Carousel.module.scss';
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import ContentWrapper from '../UI/contentWrapper/ContentWrapper';
import CarouselItems from './CarouselItems';
import { useSelector } from 'react-redux';
import LoadingSkeleton from '../loadingSkeleton/LoadingSkeleton';
import { useRef } from 'react';
const Carousel = ({ data, endPoint }) => {
  const { isLoading, error } = useSelector(state => state.data);
  const scrollRef = useRef();
  const scrollHandler = direction => {
    scrollRef.current.scroll(direction);
  };
  return (
    <div className={classes.carousel}>
      <ContentWrapper className="carousel">
        <BsFillArrowLeftCircleFill
          className={`${classes.carouselLeftNav} ${classes.arrow}`}
          onClick={scrollHandler.bind(null, 'left')}
        />
        <BsFillArrowRightCircleFill
          className={`${classes.carouselRighttNav} ${classes.arrow}`}
          onClick={scrollHandler.bind(null, 'right')}
        />
        {!isLoading && !error ? (
          <CarouselItems
            ref={scrollRef}
            data={data}
            endPoint={endPoint}
          />
        ) : (
          <div className={classes['loading-skeleton']}>
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};
export default Carousel;
