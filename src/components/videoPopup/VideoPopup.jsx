import ReactPlayer from 'react-player/youtube';
import classes from './VideoPopup.module.scss';

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopupHandler = () => {
    setShow(false);
    setVideoId(null);
  };

  return (
    <div className={`${classes['video-popup']} ${show ? classes.visible : ''}`}>
      <div className={classes['opacity-layer']} onClick={hidePopupHandler}></div>
      <div className={classes['video-player']}>
        <button className={classes['close-btn']} onClick={hidePopupHandler}>
          CLOSE
        </button>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          playing={true}
        />
      </div>
    </div>
  );
};

export default VideoPopup;
