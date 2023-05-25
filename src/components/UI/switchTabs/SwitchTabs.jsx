import { useState } from 'react';
import { switchTabAction } from '../../../store/slices/switch-tab-slice';
import classes from './SwitchTaps.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const SwitchTabs = props => {
  const { onSelectTab, options } = props;
  const [left, setLeft] = useState(0);

  const activeTabHandler = (tab, index) => {
    console.log(tab);
    setLeft(index);
    onSelectTab(tab);
  };
  return (
    <div className={classes.tab}>
      <div className={classes.tab__items}>
        {options.value.map((tab, index) => (
          <span
            key={index}
            onClick={activeTabHandler.bind(null, {type:`${options.type}/${tab}`}, index)}
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
