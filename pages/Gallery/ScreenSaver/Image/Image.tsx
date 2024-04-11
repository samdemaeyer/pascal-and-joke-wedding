import { Photo } from 'components/PhotoItem/PhotoItem';
import { useEffect, useState } from 'react';

export const Image = ({ photos, intervalTime }: { photos: Photo[]; intervalTime: number }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const shouldReset = activeIndex === photos.length - 1;
      const newIndex = shouldReset ? 0 : activeIndex + 1;
      setShouldFadeOut(true);
      setTimeout(() => {
        setActiveIndex(newIndex);
        setShouldFadeOut(false);
      }, 1500);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [activeIndex, photos, intervalTime]);

  return (
    <div className="slideshow-img">
      <img
        src={photos[activeIndex].src}
        alt="Uploaded from wedding"
        className={`${shouldFadeOut ? 'fade-out' : 'fade-in'}`}
      />
    </div>
  );
};
