import { useParams } from 'react-router-dom';
import DetailsBanner from './detailsBanner/DetailsBanner';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import createFetchDataThunk from '../../store/actions/data-actions';
import Cast from "./cast/Cast";
import VideosSection from './videosSection/VideosSection';
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendation';

const Details = () => {
  const dispatch = useDispatch();
  const { mediaType, id } = useParams();
  useEffect(() => {
    const videosThunk = createFetchDataThunk('videos');
    dispatch(videosThunk(`/${mediaType}/${id}/videos`));
    const creditsThunk = createFetchDataThunk('credits');
    dispatch(creditsThunk(`/${mediaType}/${id}/credits`));
  }, [dispatch,id,mediaType]);
  const { credits, isLoadingCredits } = useSelector(({ credits }) => credits);
  const { videos,isLoadingVideos } = useSelector(({ videos }) => videos);
console.log(videos);
  return (
    <>
      <DetailsBanner crew={credits?.crew} video={videos?.results?.[0]} />
      <Cast isLoading={isLoadingCredits} data={credits?.cast} />
      <VideosSection data={videos} isLoading={isLoadingVideos} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </>
  );
};

export default Details;
