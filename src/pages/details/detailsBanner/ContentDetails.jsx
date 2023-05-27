import dayjs from 'dayjs';
import classes from './ContentDetails.module.scss';
import Genres from '../../../components/Genres/Genres';
import CircleRating from '../../../components/UI/circleRating/CitcleRating';
import PlayIcon from '../PlayIcon';
import Crew from './Crew';
import ContentInfo from './ContentInfo';

const ContentDetails = ({ details, crew, onPlay }) => {
  const genres = details?.genres?.map(g => g.id);

  return (
    <div className={classes['content-details']}>
      <div className={classes['content-details__title']}>
        {`${details?.name || details?.title} (${dayjs(
          details?.release_date
        ).format('YYYY')})`}
      </div>

      <div className={classes['content-details__subtitle']}>
        {details?.tagline}
      </div>
      <Genres genresData={genres} className="genres--details" />
      <div className={classes['content-details__row']}>
        <CircleRating
          styling={'circle-rating__details'}
          rating={details?.vote_average.toFixed(1)}
        />
        <div className={classes.playbtn} onClick={onPlay}>
          <PlayIcon />
          <span className={classes.playbtn__text}>Watch Trailer</span>
        </div>
      </div>
      <ContentInfo details={details} />
      <Crew crew={crew} details={details} />
    </div>
  );
};

export default ContentDetails;
