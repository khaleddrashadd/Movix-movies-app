import dayjs from "dayjs";
import classes from './ContentInfo.module.scss';

const ContentInfo = ({ details }) => {
  const toHoursAndMinutes = totalMinutes => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
  };

  return (
    <>
      <div className={classes.overview}>
        <div className={classes.overview__heading}>Overview</div>
        <div className={classes.overview__description}>{details?.overview}</div>
      </div>
      <div className="info">
        {details?.status && (
          <div className="info__item">
            <span className="text bold">Status: </span>
            <span className="text">{details?.status}</span>
          </div>
        )}
        {details?.release_date && (
          <div className="info__item">
            <span className="bold text">Release Date: </span>
            <span className="text">
              {dayjs(details?.release_date).format('MMM D, YYYY')}
            </span>
          </div>
        )}
        {details?.runtime && (
          <div className="info__item">
            <span className="bold text">Runtime: </span>
            <span className="text">{toHoursAndMinutes(details?.runtime)}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default ContentInfo;
