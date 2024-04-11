import { useEffect, useState } from 'react';

const useCountdown = (targetDate: Date) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const formatUnit = (number: number) => (number <= 9 ? `0${number}` : number);

export const Countdown = () => {
  const [days, hours, minutes, seconds] = useCountdown(new Date('2024-05-18 13:00:00'));

  return (
    <div className="simply-countdown simply-countdown-one">
      <div className="simply-section simply-days-section">
        <div>
          <span className="simply-amount">{formatUnit(days)}</span>
          <span className="simply-word">days</span>
        </div>
      </div>
      <div className="simply-section simply-hours-section">
        <div>
          <span className="simply-amount">{formatUnit(hours)}</span>
          <span className="simply-word">hours</span>
        </div>
      </div>
      <div className="simply-section simply-minutes-section">
        <div>
          <span className="simply-amount">{formatUnit(minutes)}</span>
          <span className="simply-word">minutes</span>
        </div>
      </div>
      <div className="simply-section simply-seconds-section">
        <div>
          <span className="simply-amount">{formatUnit(seconds)}</span>
          <span className="simply-word">seconds</span>
        </div>
      </div>
    </div>
  );
};
