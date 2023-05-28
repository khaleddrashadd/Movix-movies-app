import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../../components/carousel/Carousel';
import { useEffect } from 'react';
import createFetchDataThunk from '../../../store/actions/data-actions';

const Recommendation = ({ mediaType, id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const similarThunk = createFetchDataThunk('recommendation');
    dispatch(similarThunk(`/${mediaType}/${id}/recommendations`));
  }, [mediaType, id, dispatch]);
  const { recommendation, isLoadingRecommendation } = useSelector(
    ({ recommendation }) => recommendation
  );
  return (
    <Carousel
      title="Recommendations"
      data={recommendation?.results}
      loading={isLoadingRecommendation}
      endpoint={mediaType}
    />
  );
};

export default Recommendation;
