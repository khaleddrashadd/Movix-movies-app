import classes from'./VideosSection.module.scss';

import VideoPopup from '../../../components/videoPopup/VideoPopup';
import Img from '../../../components/lazyLoadImage/Img';
import  PlayIcon  from '../PlayIcon';
import { useState } from "react";
import ContentWrapper from "../../../components/UI/contentWrapper/ContentWrapper";

const VideosSection = ({ data, isLoading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className={classes.skItem}>
        <div className={`${classes.thumb} ${classes.skeleton}`}></div>
        <div className={`${classes.row} ${classes.skeleton}`}></div>
        <div className={`${classes.row2} ${classes.skeleton}`}></div>
      </div>
    );
  };

  return (
    <div className={classes.videosSection}>
      <ContentWrapper className='center'>
        <div className={classes.sectionHeading}>Official Videos</div>
        {!isLoading ? (
          <div className={classes.videos}>
            {data?.results?.map(video => (
              <div
                key={video.id}
                className={classes.videoItem}
                onClick={() => {
                  setVideoId(video.key);
                  setShow(true);
                }}
              >
                <div className={classes.videoThumbnail}>
                  <Img
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  />
                  <PlayIcon />
                </div>
                <div className={classes.videoTitle}>{video.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className={classes.videoSkeleton}>
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideosSection;
