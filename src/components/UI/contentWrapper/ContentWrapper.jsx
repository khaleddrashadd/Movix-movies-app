import classes from './ContentWrapper.module.scss';

const ContentWrapper = props => {
  return <div className={classes[props.className]}>{props.children}</div>;
};

export default ContentWrapper;
