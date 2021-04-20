import React, { useEffect, useState } from 'react';
import './Stopwatch.scss';
import { interval, Subject } from 'rxjs';
import {take} from 'rxjs/operators';

// const Stopwatch = () => {
//   const [isTimerStarted, setIsTimerStarted] = useState(false);
//   const [timerId, setTimerId] = useState(null);
//   const [seconds, setSeconds] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [clickCount, setCount] = useState(0);

//   // const subscription = interval(1000);

//   const start = () => {
//     setIsTimerStarted(true);
//     setTimerId(setInterval(() => {
//       setSeconds((prevSeconds) => prevSeconds + 1);
//     }, 1000));
//     // subscription.subscribe(() => {
//     //   setSeconds((prevSeconds) => prevSeconds + 1);
//     // });
//   };

//   const wait = () => {
//     setIsTimerStarted(false);
//     setTimerId(clearInterval(timerId));
//   };

//   const reset = () => {
//     setSeconds(0);
//     setMinutes(0);
//     setHours(0);
//   };

//   const stop = () => {
//     setIsTimerStarted(false);
//     setTimerId(clearInterval(timerId));
//     reset();
//   };

//   const startCount = () => {
//     setCount((prevcount) => prevcount + 1);
//     if (clickCount === 1) {
//       wait();
//     } else {
//       setTimeout(() => {
//         setCount(0);
//       }, 300);
//     }
//   };

//   useEffect(() => {
//     if (seconds === 60) {
//       setMinutes((prevMinutes) => prevMinutes + 1);
//       setSeconds(0);
//     }
//     if (minutes === 60) {
//       setHours((prevHours) => prevHours + 1);
//       setMinutes(0);
//     }
//     if (hours === 24) {
//       stop();
//     }
//   }, [seconds, minutes, hours]);

//   return (
//     <div className="stopwatch">

//       <div className="stopwatch__screen">
//         <div className="stopwatch__item">
//           {hours < 10 ? `0${hours}` : hours}
//         </div>
//         <div className="stopwatch__border">:</div>
//         <div className="stopwatch__item">
//           {minutes < 10 ? `0${minutes}` : minutes}
//         </div>
//         <div className="stopwatch__border">:</div>
//         <div className="stopwatch__item">
//           {seconds < 10 ? `0${seconds}` : seconds}
//         </div>
//       </div>

//       <div className="stopwatch__buttons">
//         <button
//           type="button"
//           className="stopwatch__button"
//           onClick={start}
//           disabled={isTimerStarted}
//         >
//           Start
//         </button>
//         <button
//           type="button"
//           className="stopwatch__button"
//           onClick={startCount}
//         >
//           Wait
//         </button>
//         <button
//           type="button"
//           className="stopwatch__button"
//           onClick={stop}
//         >
//           Stop
//         </button>
//         <button
//           type="button"
//           className="stopwatch__button"
//           onClick={reset}
//         >
//           Reset
//         </button>
//       </div>

//     </div>
//   );
// };

// export default Stopwatch;

const Stopwatch = () => {
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [clickCount, setCount] = useState(0);


  const stream$ = new Subject()
  interval(1000)
    

  const start = () => {
    setIsTimerStarted(true)
    stream$.subscribe(() => setSeconds(prevSeconds => prevSeconds + 1))
  };

  const wait = () => {
  };

  const reset = () => {
  };

  const stop = () => {
    setIsTimerStarted(false);
    stream$.unsubscribe();
  };

  const startCount = () => {
    
  };

  useEffect(() => {
   
  }, [isTimerStarted]);

  return (
    <div className="stopwatch">
      {console.log('render')}

      <div className="stopwatch__screen">
        <div className="stopwatch__item">
          00
        </div>
        <div className="stopwatch__border">:</div>
        <div className="stopwatch__item">
          00
        </div>
        <div className="stopwatch__border">:</div>
        <div className="stopwatch__item">
          {seconds}
        </div>
      </div>

      <div className="stopwatch__buttons">
        <button
          type="button"
          className="stopwatch__button"
          onClick={start}
          disabled={isTimerStarted}
        >
          Start
        </button>
        <button
          type="button"
          className="stopwatch__button"
          onClick={startCount}
        >
          Wait
        </button>
        <button
          type="button"
          className="stopwatch__button"
          onClick={stop}
        >
          Stop
        </button>
        <button
          type="button"
          className="stopwatch__button"
          onClick={reset}
        >
          Reset
        </button>
      </div>

    </div>
  );
};

export default Stopwatch;

