import { useState, useEffect, useCallback } from 'react';
import type { CSSProperties, Dispatch } from 'react';
import { Photo } from 'components/PhotoItem/PhotoItem';
import { QRCode } from 'components/QRCode/QRCode';
import './SlideShow.css';

export const SlideShow = ({
  data,
  setSlideshowIsActive,
}: {
  data: Photo[];
  setSlideshowIsActive: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showAfter, setShowAfter] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSlide1, setActiveSlide1] = useState(data[0]);
  const [activeSlide2, setActiveSlide2] = useState(data[1]);

  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSlideshowIsActive(false);
      }
    },
    [setSlideshowIsActive],
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowAfter(!showAfter);
      const shouldReset = activeIndex === data.length - 1;
      const newIndex = shouldReset ? 0 : activeIndex + 1;
      showAfter ? setActiveSlide1(data[newIndex]) : setActiveSlide2(data[newIndex]);
      setActiveIndex(shouldReset ? 0 : activeIndex + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [showAfter, activeSlide1, activeSlide2, activeIndex, data, setShowAfter]);

  return (
    <>
      <div
        className={`fullscreen-slideshow ${showAfter ? 'show-after' : ''}`}
        style={
          {
            '--before-background': `url(${activeSlide1.src})`,
            '--after-background': `url(${activeSlide2.src})`,
          } as CSSProperties
        }
      >
        <button
          className="close-btn"
          onClick={() => {
            setSlideshowIsActive(false);
          }}
        >
          <i className="icon-circle-cross"></i>
        </button>
      </div>
      <QRCode />
    </>
  );
};
