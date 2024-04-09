import { useState } from 'react';
import { FullScreen } from './FullScreen/FullScreen';
import { Photo } from 'components/PhotoItem/PhotoItem';

export const SlideShow = ({ data }: { data: Photo[] }) => {
  const [slideshowIsActive, setSlideshowIsActive] = useState(false);
  const [showAfter, setShowAfter] = useState(false);

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
                  <h1>Slideshow</h1>
                  <button className="btn" onClick={() => setSlideshowIsActive(true)}>
                    Start Slideshow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {slideshowIsActive && (
        <FullScreen
          data={data}
          setShowAfter={setShowAfter}
          showAfter={showAfter}
          setSlideshowIsActive={setSlideshowIsActive}
        />
      )}
    </>
  );
};
