import { useSelector } from 'react-redux';

import classes from './Cast.module.scss';

import Img from '../../../components/lazyLoadImage/Img';
import avatar from '../../../assets/avatar.png';
import ContentWrapper from '../../../components/UI/contentWrapper/ContentWrapper';
import CastSkeleton from './CastSkeleton';

const Cast = ({ data, isLoading }) => {
  const { configUrl } = useSelector(({ configUrl }) => configUrl);

  return (
    <div className={classes.cast}>
      <ContentWrapper className="center">
        <div className={classes.cast__heading}>Top Cast</div>
        {!isLoading && (
          <div className={classes.cast__items}>
            {data?.map(item => {
              let imgUrl = item.profile_path
                ? configUrl.profile + item.profile_path
                : avatar;
              return (
                <div key={item.id} className={classes.cast__item}>
                  <div className={classes['cast__item--img']}>
                    <Img src={imgUrl} />
                  </div>
                  <div className={classes['cast__item--name']}>{item.name}</div>
                  <div className={classes['cast__item--character']}>
                    {item.character}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {isLoading && <CastSkeleton />}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
