import { useEffect, useState } from 'react';

export default function Game() {
  const timer = 10;
  const [startTimer, setTimeRemaining] = useState(timer);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          console.log("Time's Up!");
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div>
      <p>Time Left: {`${startTimer}`}</p>
    </div>
  );
}
