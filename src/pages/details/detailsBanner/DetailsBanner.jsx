import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classes from './DetailsBanner.module.scss';

import ContentWrapper from '../../../components/UI/contentWrapper/ContentWrapper';
import Img from '../../../components/lazyLoadImage/Img.jsx';
import createFetchDataThunk from '../../../store/actions/data-actions';
import VideoPopup from '../../../components/videoPopup/VideoPopup';
import Poster from './Poster';
import ContentDetails from './ContentDetails';
import DetailsBannerSkeleton from './DetailsBannerSkeleton';

const DetailsBanner = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const playHandler = () => {
    setShow(true);
    setVideoId(video?.key);
  };
  const { id, mediaType } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const DetailsThunk = createFetchDataThunk('details');
    dispatch(DetailsThunk(`/${mediaType}/${id}`));
  }, [mediaType, id, dispatch]);
  const { details, isLoadingDetails } = useSelector(({ details }) => details);
  const { configUrl } = useSelector(({ configUrl }) => configUrl);

  return (
    <div className={classes['details-banner']}>
      {!isLoadingDetails && (
        <>
          <div className={classes['backdrop-img']}>
            <Img src={configUrl.backdrop + details.backdrop_path} />
          </div>
          <div className={classes['opacity-layer']}></div>
          <ContentWrapper className="center">
            <div className={classes['details-banner__content']}>
              <Poster configUrl={configUrl} details={details} />
              <ContentDetails
                video={video}
                crew={crew}
                details={details}
                onPlay={playHandler}
              />
              <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
              />
            </div>
          </ContentWrapper>
        </>
      )}

      {isLoadingDetails && <DetailsBannerSkeleton />}
    </div>
  );
};

export default DetailsBanner;
