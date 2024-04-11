import { useState } from 'react';
import { Photo, PhotoItem } from 'components/PhotoItem/PhotoItem';
import { ENV, UploadButton } from 'components/UploadButton/UploadButton';
import { SlideShow } from './SlideShow/SlideShow';
import { ScreenSaver } from './ScreenSaver/ScreenSaver';
import './Gallery.css';

export const Gallery = ({ data, env }: { data: Photo[]; env: ENV }) => {
  const [slideshowIsActive, setSlideshowIsActive] = useState(false);
  const [screenSaverIsActive, setScreenSaverIsActive] = useState(false);

  return (
    <>
      <header
        id="fh5co-header"
        className="fh5co-cover fh5co-cover-sm"
        role="banner"
        style={{ backgroundImage: 'url(images/img_bg_1.jpg)' }}
      >
        <div className="overlay"></div>
        <div className="fh5co-container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <div className="display-t">
                <div className="display-tc animate-box" data-animate-effect="fadeIn">
                  <h1>Gallery</h1>
                  <button className="btn" onClick={() => setSlideshowIsActive(true)}>
                    Start Slideshow
                  </button>
                  <button className="btn" onClick={() => setScreenSaverIsActive(true)}>
                    Start Screensaver
                  </button>
                  <UploadButton env={env} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {slideshowIsActive && <SlideShow data={data} setSlideshowIsActive={setSlideshowIsActive} />}
      {screenSaverIsActive && <ScreenSaver photos={data} setScreenSaverIsActive={setScreenSaverIsActive} />}
      <ul className="image-gallery">
        {data.map((photo, i, collection) => (
          <PhotoItem photo={photo} collection={collection} key={i} index={i} />
        ))}
      </ul>
    </>
  );
};
