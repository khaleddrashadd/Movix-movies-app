import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../../components/carousel/Carousel';
import { useEffect } from 'react';
import createFetchDataThunk from '../../../store/actions/data-actions';

const Recommendation = ({ mediaType, id }) => {
  const { recommendation, isLoadingRecommendation } = useSelector(
    ({ recommendation }) => recommendation
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const similarThunk = createFetchDataThunk('recommendation');
    dispatch(similarThunk(`/${mediaType}/${id}/recommendations`));
  }, [mediaType, id, dispatch]);
  return (
    <Carousel
      title="Recommendations"
      data={recommendation?.results}
      loading={isLoadingRecommendation}
      endPoint={mediaType}
    />
  );
};

export default Recommendation;
