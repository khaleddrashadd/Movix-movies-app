import classes from './Spinner.module.scss';

const Spinner = ({ initial }) => {
  return (
    <div
      className={`${classes['loading-spinner']} ${initial && classes.initial}`}
    >
      <svg className={classes.spinner} viewBox="0 0 50 50">
        <circle
          className={classes.spinner__path}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  );
};

export default Spinner;
