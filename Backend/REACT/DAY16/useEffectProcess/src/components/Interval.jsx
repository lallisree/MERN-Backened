import React, { useEffect, useState } from "react";

const Interval = () => {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timers = start
      ? setInterval(() => {
          setTimer((p) => p + 1);
        }, 1000)
      : null;

    return () => clearInterval(timers);
  }, [start]);

  const handleStart = () => {
    setStart(true);
  };

  const handleStop = () => {
    setStart(false);
  };

  const handleReset = () => {
    setStart(false);
    setTimer(0);
  };

  return (
    <>
    <h1>Using setInterval</h1>
      <p>{timer}</p>

      <button onClick={handleStart}>Start</button>
      <br />
      <br />

      <button onClick={handleStop}>Stop</button>
      <br />
      <br />

      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Interval;
