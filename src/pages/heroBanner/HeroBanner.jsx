import { useEffect, useState } from 'react';
import classes from './HeroBanner.module.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../components/lazyLoadImage/Img';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { data, isloading } = useFetch('/movie/upcoming');
  const { url } = useSelector(state => state.home);

  useEffect(() => {
    const background = ` ${url.backdrop}${
      data?.results?.[Math.ceil(Math.random() * 20)]?.backdrop_path
    }`;
    setBackground(background);
  }, [data]);

  const searchQueryHandler = event => {
    if (event.key === 'Enter' && query.length > 0) navigate(`/search/${query}`);
  };

  const inputChangeHandler = event => {
    console.log(event.target.value);
    setQuery(event.target.value);
  };

  return (
    <div className={classes['hero-banner']}>
      <div className={classes['backdrop-image']}>
        {!isloading && <Img src={background} alt='hero banner' />}
      </div>
      <ContentWrapper className='center'>
        <div className={classes['hero-banner__content']}>
          <span className={classes['hero-banner__title']}>welcome</span>
          <span className={classes['hero-banner__subtitle']}>
            Millions of movies, Tv shows and people to discover. Explore Now.
          </span>
          <div className={classes['hero-banner__search']}>
            <input
              className={classes['hero-banner__search-input']}
              type="text"
              placeholder="Search for a movie or TV show...."
              onKeyUp={searchQueryHandler}
              onChange={inputChangeHandler}
            />
            <button className={classes['hero-banner__search-btn']}>
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
