import { switchTabAction } from '../../../store/slices/switch-tab-slice';
import classes from './SwitchTaps.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const SwitchTabs = props => {
  const switchTab = useSelector(state => state.switchTab);
  const dispatch = useDispatch();

  const { left } = switchTab;
  const { selectedTab } = switchTab;

  const activeTab = (tab, index) => {
    dispatch(switchTabAction.translate(index));
    dispatch(switchTabAction.getTab(tab));
  };
  return (
    <div className={classes.tab}>
      <div className={classes.tab__items}>
        {props.options.map((tab, index) => (
          <span
            key={index}
            onClick={activeTab.bind(null, tab, index)}
            className={`${classes.tab__item} ${
              selectedTab === tab.toLowerCase() && classes.active
            }`}
          >
            {tab}
          </span>
        ))}
        <span className={classes.tab__slider} style={{ left }}></span>
      </div>
    </div>
  );
};

export default SwitchTabs;
