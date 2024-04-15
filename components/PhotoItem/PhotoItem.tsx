import { useState } from 'react';

export type Photo = { src: string };

export const PhotoItem = ({ photo, collection, index }: { photo: Photo; collection: Photo[]; index: number }) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  const [expandedSrc, setExpandedSrc] = useState<string | null>();

  return (
    <>
      <li>
        <img src={photo.src} alt="Uploaded from wedding" />
        <button className="overlay" onClick={() => setExpandedSrc(photo.src)}>
          <span>Klik om te vergroten</span>
        </button>
      </li>
      {expandedSrc && (
        <>
          <button
            className="nav-btn prev"
            disabled={currentIndex === 0}
            onClick={() => {
              setExpandedSrc(collection[currentIndex - 1].src);
              setCurrentIndex(currentIndex - 1);
            }}
          >
            <i className="icon-arrow-with-circle-left"></i>
          </button>
          <button className="expanded-overlay" onClick={() => setExpandedSrc(null)}>
            <img src={expandedSrc} alt="Uploaded from wedding" />
          </button>
          <button
            className="nav-btn next"
            disabled={currentIndex === collection.length - 1}
            onClick={() => {
              setExpandedSrc(collection[currentIndex + 1].src);
              setCurrentIndex(currentIndex + 1);
            }}
          >
            <i className="icon-arrow-with-circle-right"></i>
          </button>
        </>
      )}
    </>
  );
};
