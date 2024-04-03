import './PhotoPreview.css';

export const PhotoPreview = ({ data }: { data: string[][] }) =>
  data?.map((imageURls, i) => (
    <div key={i} className="carousel-container">
      {imageURls?.map((url) => (
        <div key={url} className="carousel-card">
          <img className="carousel-img background" src={url} alt="Uploaded from the wedding" />
          <div className="backdrop"></div>
        </div>
      ))}
    </div>
  ));
