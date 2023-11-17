import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < percentage) {
        setProgress(progress + 1);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [percentage, progress]);

  return (
    <div className='text-center'>
      {/* <h4>Circular progress bar in React </h4> */}
      <div className=" text-center" style={{ width: 150 }}>
        <CircularProgressbar

          value={progress}
          text={`${progress}%`}
          styles={buildStyles({
            pathColor: `rgba(185, 0, 255, 
                ${progress / 100})`,
            textColor: '#fff',
            trailColor: '#ddd',
          })}
        />
      </div>
    </div>
  );
};

export default CircularProgress;
