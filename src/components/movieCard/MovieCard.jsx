import classes from './MovieCard.module.scss';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Img from '../lazyLoadImage/Img';
import CircleRating from '../UI/circleRating/CitcleRating';
import Genres from '../genres/Genres';
import PosterFallback from '../../assets/no-poster.png';

const MovieCard = ({ data, mediaType }) => {
  const { configUrl } = useSelector(({ configUrl }) => configUrl);
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? configUrl?.poster + data.poster_path
    : PosterFallback;

  const navigateMovieHandler = () => {
    navigate(`/${data.media_type || mediaType}/${data.id}`);
  };

  return (
    <div className={classes['movie-card']} onClick={navigateMovieHandler}>
      <div className={classes['poster-block']}>
        <Img alt="posterImg" src={posterUrl} />
        <CircleRating
          rating={data?.vote_average.toFixed(1)}
          styling="circle-rating--home"
        />
        <Genres
          genresData={data.genre_ids.slice(0, 2)}
          className="genres--home"
        />
      </div>
      <div className={classes.text}>
        <span className={classes.text__title}>{data.title || data.name}</span>
        <span className={classes.text__date}>
          {dayjs(data.release_date).format('MMM D, YYYY')}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
