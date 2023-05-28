import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import Select from 'react-select';
import classes from './Explore.module.scss';
import ContentWrapper from '../../components/UI/contentWrapper/ContentWrapper';
import MovieCard from '../../components/movieCard/MovieCard';
import Spinner from '../../components/spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import createFetchDataThunk from '../../store/actions/data-actions';
import { discoverActions } from '../../store/slices/discover-slice';


const sortbyData = [
  { value: 'popularity.desc', label: 'Popularity Descending' },
  { value: 'popularity.asc', label: 'Popularity Ascending' },
  { value: 'vote_average.desc', label: 'Rating Descending' },
  { value: 'vote_average.asc', label: 'Rating Ascending' },
  {
    value: 'primary_release_date.desc',
    label: 'Release Date Descending',
  },
  { value: 'primary_release_date.asc', label: 'Release Date Ascending' },
  { value: 'original_title.asc', label: 'Title (A-Z)' },
];
const Explore = () => {
  const [pageNum, setPageNum] = useState(1);
  const [genre, setGenre] = useState(null);
  const [sortby, setSortby] = useState(null);

  const [filter, setFilter] = useState({});
  const { mediaType } = useParams();
  const dispatch = useDispatch();

  const { discover, isLoadingDiscover } = useSelector(
    ({ discover }) => discover
  );
  const { tvGenres, movieGenres } = useSelector(({ genres }) => genres);
  const genresDataArr = Object.entries({ ...tvGenres, ...movieGenres });
  const genresData = genresDataArr.map(genre => genre[1]);

  useEffect(() => {
    const genresThunk = createFetchDataThunk(`${mediaType}/genres`);
    dispatch(genresThunk(`/genre/${mediaType}/list`));
  }, [dispatch, mediaType]);

  useEffect(() => {
    const discoverThunk = createFetchDataThunk('discover', filter);
    dispatch(discoverThunk(`/discover/${mediaType}?page=${pageNum}`));
  }, [dispatch, mediaType, pageNum, filter]);

  const fetchNextPageData = () => {
    setPageNum(prev => prev + 1);
  };

  useEffect(() => {
    dispatch(discoverActions.clear());
    setFilter({});
    setFilter(null);
    setPageNum(1);
    setSortby(null);
    setGenre(null);
  }, [mediaType, dispatch]);

  const onChange = (selectedItems, action) => {
    if (action.name === 'sortby') {
      setSortby(selectedItems);
      if (action.action !== 'clear') {
        dispatch(discoverActions.clear());
        setFilter({ sort_by: selectedItems.value });
      } else {
        dispatch(discoverActions.clear());
        setFilter({});
      }
    }

    if (action.name === 'genres') {
      setGenre(selectedItems);
      if (action.action !== 'clear') {
        dispatch(discoverActions.clear());
        const genreIdArr = selectedItems.map(g => g.id);
        const genreId = genreIdArr.toString();
        setFilter(prev => {
          return { ...prev, with_genres: genreId };
        });
      } else {
        dispatch(discoverActions.clear());
        setFilter(prev => {
          return { ...prev, with_genres: null };
        });
      }
    }
    setPageNum(1);
  };

  return (
    <div className={classes.page}>
      <ContentWrapper className="center">
        <div className={classes.page__header}>
          <div className={classes.page__title}>
            {mediaType === 'tv' ? 'Explore TV Shows' : 'Explore Movies'}
          </div>
          <div className={classes.page__filters}>
            <Select
              isMulti
              name="genres"
              value={genre}
              closeMenuOnSelect={false}
              options={genresData}
              getOptionLabel={option => option.name}
              getOptionValue={option => option.id}
              onChange={onChange}
              placeholder="Select genres"
              classNamePrefix="select"
              className="select genresDD"
            />
            <Select
              name="sortby"
              value={sortby}
              options={sortbyData}
              onChange={onChange}
              isClearable={true}
              placeholder="Sort by"
              classNamePrefix="select"
              className="select genresDD"
            />
          </div>
        </div>
        {isLoadingDiscover && <Spinner initial={true} />}
        {!isLoadingDiscover && (
          <>
            {discover.results?.length > 0 ? (
              <InfiniteScroll
                className={classes.page__content}
                dataLength={discover.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= discover.total_pages}
                loader={<Spinner />}
              >
                {discover?.results?.map((item, index) => {
                  if (item.media_type === 'person') return;
                  return (
                    <MovieCard fromSearch={false} key={index} data={item} mediaType={mediaType} />
                  );
                })}
              </InfiniteScroll>
            ) : (
              <span className={classes['not-found']}>
                Sorry, Results not found!
              </span>
            )}
          </>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Explore;
