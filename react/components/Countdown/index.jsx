import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const targetDate = new Date('2024-11-30T00:00:00');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate - new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div>
  
      <div class="relogio">
        <ul>
        <li><span>{timeLeft.days}</span><p>Dias</p></li>
        <li><span>{timeLeft.hours}</span><p>Horas</p></li>
        <li><span>{timeLeft.minutes}</span><p>Minutos</p></li>
        <li><span>{timeLeft.seconds}</span><p>Segundos</p></li>
        </ul>
      </div>
    </div>
  );
};

export default Countdown;
