export const ComingSoon = () => (
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
                <h1>Galerij</h1>
                <h2>Binnenkort beschikbaar</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="container" style={{ marginTop: '2rem' }}>
      <div className="jumbotron">
        <h2 className="display-4 h1">De Galerij</h2>
        <p className="lead">Deze galerij wordt geactiveerd op de dag van de bruiloft</p>
        <hr className="my-4" />
        <p>
          kunt uw eigen foto&apos;s van de bruiloft uploaden en deze worden hier weergegeven. Er zal ook er zijn enkele
          preview-functionaliteiten beschikbaar
        </p>
      </div>
    </div>
  </>
);
