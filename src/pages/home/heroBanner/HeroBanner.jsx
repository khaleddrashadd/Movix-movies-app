import { useEffect, useRef } from 'react';
import classes from './HeroBanner.module.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/UI/contentWrapper/ContentWrapper';
import createFetchDataThunk from '../../../store/actions/data-actions';
import { useDispatch } from 'react-redux';

const HeroBanner = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const upcomingThunk = createFetchDataThunk('upcoming');
    dispatch(upcomingThunk('/movie/upcoming'));
  }, [dispatch]);

  const { configUrl, isLoadingUrl } = useSelector(({ configUrl }) => configUrl);
  const { upcomingMovies, isLoadingUpcoming } = useSelector(
    ({ upcomingMovies }) => upcomingMovies
  );
  const background = ` ${configUrl.backdrop}${
    upcomingMovies?.[Math.ceil(Math.random() * 20)]?.backdrop_path
  }`;
  const submitFormHandler = event => {
    event.preventDefault();
    const query = inputRef.current.value;
    if (query.trim('') === '') return;
    navigate(`/search/${query}`);
  };

  const isLoading = isLoadingUrl && isLoadingUpcoming;

  return (
    <div className={classes['hero-banner']}>
      <div className={classes['backdrop-image']}>
        {!isLoading && <Img src={background} alt="hero banner" />}
      </div>
      <ContentWrapper className="hero-banner__wrapper">
        <div className={classes['hero-banner__content']}>
          <span className={classes['hero-banner__title']}>welcome</span>
          <span className={classes['hero-banner__subtitle']}>
            Millions of movies, Tv shows and people to discover. Explore Now.
          </span>
          <form
            action=""
            className={classes['hero-banner__search']}
            onSubmit={submitFormHandler}
          >
            <input
              className={classes['hero-banner__search-input']}
              type="text"
              placeholder="Search for a movie or TV show...."
              ref={inputRef}
            />
            <button className={classes['hero-banner__search-btn']}>
              Search
            </button>
          </form>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
