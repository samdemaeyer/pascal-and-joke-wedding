import { useRevalidator } from '@remix-run/react';
import { useEffect, useCallback } from 'react';
import type { Dispatch } from 'react';
import { Photo } from 'components/PhotoItem/PhotoItem';
// import { QRCode } from 'components/QRCode/QRCode';
import { Image } from './Image/Image';
import './ScreenSaver.css';

export const ScreenSaver = ({
  photos,
  setScreenSaverIsActive,
}: {
  photos: Photo[];
  setScreenSaverIsActive: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const revalidator = useRevalidator();
  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setScreenSaverIsActive(false);
      }
    },
    [setScreenSaverIsActive],
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  useEffect(() => {
    const polling = 150000; // `150000` === 2.5 minutes
    const timer = setInterval(() => {
      revalidator.revalidate();
    }, polling);

    return () => clearInterval(timer);
  }, [revalidator]);

  const intervals = [3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000];

  const chunkSize = Math.ceil(photos.length / intervals.length);
  const splitData = Array.from({ length: intervals.length }, (_, i) =>
    photos.slice(i * chunkSize, i * chunkSize + chunkSize),
  );

  return (
    <div className="screensaver-wrapper">
      {splitData.map((groupedPhotos, index) =>
        groupedPhotos.length ? <Image key={index} photos={groupedPhotos} intervalTime={intervals[index]} /> : null,
      )}
      {/* <QRCode /> */}
      <button className="close-btn" onClick={() => setScreenSaverIsActive(false)}>
        <i className="icon-circle-cross"></i>
      </button>
    </div>
  );
};
