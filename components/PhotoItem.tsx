import { useState } from 'react';

export type Photo = { src: string };

export const PhotoItem = ({ photo }: { photo: Photo }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <li>
        <img src={photo.src} alt="Uploaded from wedding" />
        <button className="overlay" onClick={() => setIsExpanded(!isExpanded)}>
          <span>Click to enlarge</span>
        </button>
      </li>
      {isExpanded && (
        <button className="expanded-overlay" onClick={() => setIsExpanded(false)}>
          <img src={photo.src} alt="Uploaded from wedding" />
        </button>
      )}
    </>
  );
};
