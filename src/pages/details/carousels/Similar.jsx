import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../../components/carousel/Carousel';
import { useEffect } from 'react';
import createFetchDataThunk from '../../../store/actions/data-actions';

const Similar = ({ mediaType, id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const similarThunk = createFetchDataThunk('similar');
    dispatch(similarThunk(`/${mediaType}/${id}/similar`));
  }, [mediaType, id, dispatch]);
  const { similar, isLoadingSimilar } = useSelector(({ similar }) => similar);

  const title = mediaType === 'tv' ? 'Similar TV Shows' : 'Similar Movies';

  return (
    <Carousel
      title={title}
      data={similar?.results}
      loading={isLoadingSimilar}
      endpoint={mediaType}
    />
  );
};

export default Similar;
