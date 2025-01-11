import React, { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Start the stopwatch
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000); // Update time every second
    }
  };

  // Pause the stopwatch
  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  // Reset the stopwatch
  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  // Cleanup when the component unmounts or timer is paused
  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Clear interval on unmount
  }, []);

  return (
    <div>
      <h1>Stopwatch</h1>
      <div style={{ fontSize: "2em" }}>
        {Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}
      </div>
      <div>
        {!isRunning ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <button onClick={pauseTimer}>Pause</button>
        )}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
