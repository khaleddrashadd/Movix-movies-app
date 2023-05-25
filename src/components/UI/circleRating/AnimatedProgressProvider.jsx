import  { useState, useEffect, useRef } from 'react';
import { Animate } from 'react-move';

const AnimatedProgressProvider = ({
  children,
  valueStart = 0,
  valueEnd,
  duration,
  easingFunction,
  repeat,
}) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    if (repeat) {
      intervalRef.current = setInterval(() => {
        setIsAnimated(prevIsAnimated => !prevIsAnimated);
      }, duration * 1000);
    } else {
      setIsAnimated(true);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [repeat, duration]);

  return (
    <Animate
      start={() => ({
        value: valueStart,
      })}
      update={() => ({
        value: [isAnimated ? valueEnd : valueStart],
        timing: {
          duration: duration * 1000,
          ease: easingFunction,
        },
      })}
    >
      {({ value }) => children(value.toFixed(1))}
    </Animate>
  );
};

export default AnimatedProgressProvider;
