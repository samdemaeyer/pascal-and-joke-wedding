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
                <h1>Gallery</h1>
                <h2>Coming soon</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="container" style={{ marginTop: '2rem' }}>
      <div className="jumbotron">
        <h2 className="display-4 h1">The Gallery</h2>
        <p className="lead">This Gallery will be activated on the day of the wedding</p>
        <hr className="my-4" />
        <p>
          You will be able to upload your own pictures of the wedding and they will be displayed here. There will also
          be some preview functionalities available
        </p>
      </div>
    </div>
  </>
);
