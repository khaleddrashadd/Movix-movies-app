import classes from './Carousel.module.scss';
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import dayjs from 'dayjs';
import Img from '../lazyLoadImage/Img';
import PosterFallback from '../../assets/no-poster.png';
import { useRef } from 'react';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import { useSelector } from 'react-redux';
const Carousel = props => {
  const carouselRef = useRef();
  const { url } = useSelector(state => state.home);

  const loadingSkeleton = () => {
    return (
      <div className={classes.skeletonItem}>
        <div className={`${classes.posterBlock} skeleton`}></div>
        <div className={classes.textBlock}>
          <div className={`${classes.title} skeleton`}></div>
          <div className={`${classes.date} skeleton`}></div>
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
        {!props.isLoading ? (
          <div className={classes.carouselItems}>
            {props.data?.map(item => {
              const posterUrl = item?.poster_path
                ? `${url.poster}${item.poster_path}`
                : PosterFallback;
              return (
                <div key={item.id} className={classes.carouselItem}>
                  <div className={classes.posterBlock}>
                    <Img src={posterUrl} alt="poster" />
                  </div>
                  <div className={classes.textBlock}>
                    <span className={classes.title}>
                      {item.title || item.name}
                    </span>
                    <span className={classes.date}>
                      {dayjs(item.release_date).format('MMM D, YYYY')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={classes.loadingSkeleton}>
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
