import { useSelector } from 'react-redux';
import classes from './Genres.module.scss';
import { useMemo } from 'react';

const Genres = props => {
  const { tvGenres, movieGenres } = useSelector(({ genres }) => genres);
  const allGenres = useMemo(() => {
    return { ...tvGenres, ...movieGenres };
  }, [tvGenres, movieGenres]);
  return (
    <div className={classes[props.className]}>
      {props.genresData?.map(genre => {
        if (!allGenres[genre]?.name) return;
        return (
          <div key={genre} className={classes.genres__item}>
            {allGenres[genre]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
