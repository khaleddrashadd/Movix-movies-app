import dayjs from 'dayjs';
import classes from './CarouselItems.module.scss';
import Img from '../lazyLoadImage/Img';
import PosterFallback from '../../assets/no-poster.png';
import {  useSelector } from "react-redux";
import CircleRating from "../circleRating/CitcleRating";

const CarouselItems = () => {
    const {configUrl, trendingMovies } = useSelector(state => state.trending);

  return (
    <div className={classes.carousel__items}>
      {trendingMovies?.map(item => {
        const rating = item.vote_average.toFixed(1);
        const posterUrl = item?.poster_path
          ? `${configUrl.poster}${item.poster_path}`
          : PosterFallback;

        return (
          <div key={item.id} className={classes.carousel__item}>
            <div className={classes['carousel__poster-block']}>
              <Img src={posterUrl} alt="poster" />
              <CircleRating rating={rating}/>
            </div>
            <div className={classes.text}>
              <span className={classes.text__title}>{item.title || item.name}</span>
              <span className={classes.text__date}>
                {dayjs(item.release_date).format('MMM D, YYYY')}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarouselItems;
