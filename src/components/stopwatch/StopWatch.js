import React, { useState, useEffect } from "react";
import ControlButton from "../controls/Controls";
import Timer from "../timer/Timer";

export default function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
        // This will add up time on regular basis until or unless isActive Value Change or isPaused value change
      interval = setInterval(() => {
        setTime((time) => time + 10);
      },10);
    } else {
      clearInterval(interval);
    }
    return () =>{
        clearInterval(interval);
    };
  }, [isActive, isPaused]);

//   Start the stopwatch
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

//   Pause or Resume Stopwatch
  const handlePauseRequest = () => {
    setIsPaused(!isPaused);
  };

//   It will Reset the stopwatch
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <>
    <h4>Stopwatch</h4><br />
      <Timer time={time} />
      <br /><br />
      <ControlButton
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseRequest={handlePauseRequest}
        handleReset={handleReset}
      />
    </>
  );
}
