import { useEffect, useState } from 'react';

export const useWindowScroll = () => {
  const [backgroundPosition, setBackgroundPosition] = useState('0px 0px');

  useEffect(() => {
    const onScroll = () => setBackgroundPosition(`0px ${window.pageYOffset}px`);
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return {
    backgroundPosition,
  };
};
