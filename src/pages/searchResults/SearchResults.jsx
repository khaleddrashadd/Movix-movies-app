import { useParams } from 'react-router-dom';
import './SearchResults.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import createFetchDataThunk from '../../store/actions/data-actions';
import Spinner from '../../components/spinner/Spinner';
import classes from './SearchResults.module.scss';
import ContentWrapper from '../../components/UI/contentWrapper/ContentWrapper';
import MovieCard from '../../components/movieCard/MovieCard';
import InfiniteScroll from 'react-infinite-scroll-component';

function SearchResults() {
  // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

  const [pageNum, setPageNum] = useState(1);
  const params = useParams();
  const { query } = params;
  const dispatch = useDispatch();

  const { searchResults, isLoadingSearch } = useSelector(
    ({ searchResults }) => searchResults
  );
  useEffect(() => {
    const configThunk = createFetchDataThunk('config');
    dispatch(configThunk('/configuration'));
  }, [dispatch]);

  useEffect(() => {
    const searchThunk = createFetchDataThunk('search');
    dispatch(searchThunk(`/search/multi?query=${query}&page=${pageNum}`));
  }, [dispatch, pageNum, query]);

  const nextPageHandler = () => {
    setPageNum(prevState => prevState + 1);
  };
  console.log(pageNum);

  return (
    <div className={classes['search-results']}>
      {isLoadingSearch && <Spinner initial={true} />}
      <ContentWrapper className="center">
        {!isLoadingSearch && searchResults.results.length > 0 && (
          <>
            <div className={classes['search-results__title']}>
              {`Search ${
                searchResults.total_results > 1 ? 'results' : 'result'
              } of '${query}'`}
            </div>
            <InfiniteScroll
              className={classes['search-results__content']}
              dataLength={searchResults?.results.length}
              next={nextPageHandler}
              hasMore={pageNum <= searchResults.total_pages}
              loader={<Spinner />}
            >
              {searchResults.results.map(
                (movie, i) =>
                  movie.media_type !== 'person' && (
                    <MovieCard key={i} data={movie} fromSearch={true} />
                  )
              )}
            </InfiniteScroll>
          </>
        )}
        {!isLoadingSearch && searchResults.results.length === 0 && (
          <span className={classes['no-result']}>
            Sorry Results Not Found :(
          </span>
        )}
      </ContentWrapper>
    </div>
  );
}

export default SearchResults;
