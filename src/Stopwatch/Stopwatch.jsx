import React, { useEffect, useState } from 'react';
import './Stopwatch.scss';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isTimeStarted, setIsTimeStarted] = useState(false);

  useEffect(() => {
    const stream$ = new Subject();
    interval(1000)
      .pipe(
        takeUntil(stream$)
      )
      .subscribe(() => {
        if (isTimeStarted) {
          setTime((prevTime) => prevTime + 1);
        }
      });

    return () => {
      stream$.next();
      stream$.complete();
    };
  }, [isTimeStarted]);

  const start = () => {
    setIsTimeStarted(true);
  };

  const wait = () => {
    setIsTimeStarted(false);
  };

  const reset = () => {
    if (time >= 1) {
      setTime(0);
      setIsTimeStarted(true);
    }
  };

  const stop = () => {
    setIsTimeStarted(false);
    setTime(0)
  }

  return (
    <div className="stopwatch">
      <div className="stopwatch__screen">

        <div className="stopwatch__item">
          {(`0${Math.floor((time / 3600) % 100)}`).slice(-2)}
        </div>
        <div className="stopwatch__border">:</div>

        <div className="stopwatch__item">
          {(`0${Math.floor((time / 60) % 60)}`).slice(-2)}
        </div>
        <div className="stopwatch__border">:</div>

        <div className="stopwatch__item">
          {(`0${Math.floor(time % 60)}`).slice(-2)}
        </div>
        
      </div>

      <div className="stopwatch__buttons">
        <button
          type="button"
          className="stopwatch__button"
          onClick={start}
          disabled={isTimeStarted}
        >
          Start
        </button>
        <button
          type="button"
          className="stopwatch__button"
          onDoubleClick={wait}
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

