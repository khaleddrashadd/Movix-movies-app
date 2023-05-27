import Img from '../../../components/lazyLoadImage/Img';
import classes from './Poster.module.scss';
import PosterFallback from '../../../assets/no-poster.png';

const Poster = ({details,configUrl}) => {
  return (
    <div className={classes.poster}>
      {details.poster_path ? (
        <Img
          className={classes.poster__img}
          src={configUrl?.backdrop + details?.poster_path}
        />
      ) : (
        <Img className={classes.poster__img} src={PosterFallback} />
      )}
    </div>
  );
};

export default Poster;
