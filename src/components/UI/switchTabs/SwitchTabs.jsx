import { useState } from 'react';
import classes from './SwitchTaps.module.scss';

const SwitchTabs = props => {
  const { onSelectTab, options } = props;
  const [left, setLeft] = useState(0);

  const activeTabHandler = (tab, index) => {
    setLeft(index);
    onSelectTab(tab);
  };
  return (
    <div className={classes.tab}>
      <div className={classes.tab__items}>
        {options.map((tab, index) => (
          <span
            key={index}
            onClick={activeTabHandler.bind(null, tab, index)}
            className={`${classes.tab__item} ${
              left === index && classes.active
            }`}
          >
            {tab}
          </span>
        ))}
        <span
          className={classes.tab__slider}
          style={{ left: left * 100 }}
        ></span>
      </div>
    </div>
  );
};

export default SwitchTabs;
