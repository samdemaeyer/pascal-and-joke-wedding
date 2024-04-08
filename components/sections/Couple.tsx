import ScrollAnimation from 'react-animate-on-scroll';

export const Couple = () => (
  <div id="fh5co-couple">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
          <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
            <h2>Hello!</h2>
            <h3>18 Mei 2016 - Diepenbeek</h3>
            <p>Staying away is not an option</p>
          </ScrollAnimation>
        </div>
      </div>
      <div className="couple-wrap animate-box">
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
          <div className="couple-half">
            <div className="groom">
              <img src="images/groom.jpg" alt="groom" className="img-responsive" />
            </div>
            <div className="desc-groom">
              <h3>Pascal Van Ootegem</h3>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove
              </p>
            </div>
          </div>
          <p className="heart text-center">
            <i className="icon-heart2"></i>
          </p>
          <div className="couple-half">
            <div className="bride">
              <img src="images/bride.jpg" alt="groom" className="img-responsive" />
            </div>
            <div className="desc-bride">
              <h3>Joke De Maeyer</h3>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  </div>
);
