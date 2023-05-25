/* eslint-disable react/display-name */
import dayjs from 'dayjs';
import classes from './CarouselItems.module.scss';
import Img from '../lazyLoadImage/Img';
import PosterFallback from '../../assets/no-poster.png';
import { useSelector } from 'react-redux';
import CircleRating from '../UI/circleRating/CitcleRating';
import Genres from '../Genres/Genres';
import React, { useRef, useImperativeHandle } from 'react';
import { useNavigate } from 'react-router';

const CarouselItems = React.forwardRef((props, ref) => {
  const { configUrl, trendingMovies } = useSelector(state => state.data);
  const scrollRef = useRef();
  const navigate = useNavigate();

  const carouselScroll = direction => {
    const scrollAmount =
      direction === 'left'
        ? scrollRef.current.scrollLeft - scrollRef.current.offsetWidth + 20
        : scrollRef.current.scrollLeft + scrollRef.current.offsetWidth + 20;
    scrollRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };
  useImperativeHandle(ref, () => {
    return { scroll: carouselScroll };
  });

  return (
    <div className={classes.carousel__items} ref={scrollRef}>
      {props.data?.map(item => {
        const rating = item.vote_average.toFixed(1);
        const posterUrl = item?.poster_path
          ? `${configUrl.poster}${item.poster_path}`
          : PosterFallback;

        return (
          <div
            key={item.id}
            className={classes.carousel__item}
            onClick={() => {
              navigate(`/${item.media_type||props.endPoint}/${item.id}`);
            }}
          >
            <div className={classes['carousel__poster-block']}>
              <Img src={posterUrl} alt="poster" />
              <CircleRating rating={rating} />
              <Genres genresData={item.genre_ids.slice(0, 2)} />
            </div>
            <div className={classes.text}>
              <span className={classes.text__title}>
                {item.title || item.name}
              </span>
              <span className={classes.text__date}>
                {dayjs(item.release_date).format('MMM D, YYYY')}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default CarouselItems;
