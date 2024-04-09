import { Photo, PhotoItem } from 'components/PhotoItem/PhotoItem';
import './Gallary.css';

export const Gallery = ({ data }: { data: Photo[] }) => (
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
                <h2>Dignissimos asperiores vitae velit veniam totam</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <ul className="image-gallery">
      {data.map((photo, i, collection) => (
        <PhotoItem photo={photo} collection={collection} key={i} index={i} />
      ))}
    </ul>
  </>
);
