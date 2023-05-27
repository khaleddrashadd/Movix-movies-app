import classes from './DetailsBannerSkeleton.module.scss';
import ContentWrapper from '../../../components/UI/contentWrapper/ContentWrapper';

const DetailsBannerSkeleton = () => {
  const items = [];
  for (let i = 0; i < 7; i++) {
    items.push(<div className={`${classes.row} skeleton`}></div>);
  }
  return (
    <div className={classes['details-banner-skeleton']}>
      <ContentWrapper className="details">
        <div className={`${classes.left} skeleton`}></div>
        <div className={classes.right}>{items.map(item => item)}</div>
      </ContentWrapper>
    </div>
  );
};

export default DetailsBannerSkeleton;
