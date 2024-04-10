import { useEffect, useCallback } from 'react';
import type { CSSProperties, Dispatch } from 'react';
import { Photo } from 'components/PhotoItem/PhotoItem';
import { QRCode } from 'components/QRCode/QRCode';
import './ScreenSaver.css';

export const ScreenSaver = ({
  photos,
  setScreenSaverIsActive,
}: {
  photos: Photo[];
  setScreenSaverIsActive: Dispatch<React.SetStateAction<boolean>>;
}) => {
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

  let delay = 0;

  return (
    <div className="screensaver-wrapper">
      {photos.map((photo, i) => {
        delay = delay + 3;
        const selector = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        const left = `${Math.floor(Math.random() * (100 - -20 + 1) + -20)}vw`;
        return (
          <img
            src={photo.src}
            alt="Uploaded from wedding"
            key={i}
            className="slideshow-img"
            style={
              {
                '--name': `float-up-${selector}`,
                '--duration': `calc(20s * ${selector})`,
                animationDelay: `-${delay}s`,
                zIndex: `-${selector}`,
                left,
              } as CSSProperties
            }
          />
        );
      })}
      <QRCode />
      <button
        className="close-btn"
        onClick={() => {
          setScreenSaverIsActive(false);
        }}
      >
        <i className="icon-circle-cross"></i>
      </button>
    </div>
  );
};
