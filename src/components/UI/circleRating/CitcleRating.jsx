import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeCircleOut } from 'd3-ease';


import './CitcleRating.scss';
import AnimatedProgressProvider from './AnimatedProgressProvider';

const CircleRating = ({ rating }) => {
  return (
    <div className="circleRating">
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={rating}
        duration={2.5}
        easingFunction={easeCircleOut}
      >
        {rating => (
          <CircularProgressbar
            value={rating}
            maxValue={10}
            text={rating}
            styles={buildStyles({
              pathColor: rating < 5 ? 'red' : rating < 7 ? 'orange' : 'green',
              strokeLinecap: 'round',
              trailColor: '#d6d6d699',
            })}
          />
        )}
      </AnimatedProgressProvider>
    </div>
  );
};

export default CircleRating;
