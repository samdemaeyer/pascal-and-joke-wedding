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
              <img src="images/Joke.jpg" alt="bride" className="img-responsive" />
            </div>
            <div className="desc-groom">
              <h3>Joke De Maeyer</h3>
              <p>
                Joke, geboren op 3 Oktober 1985 in Hasselt. Groeide op in Deurne. Op 12 jarige leeftijd verhuisde ze
                naar Hasselt waar ze uiteindelijk studeerde als kapster. Na enkele jobs aan de kassa, begon ze dan in de
                Pearl. Hier sloeg de passie voor optiek over en werkte haar weg up en opende uiteindelijk haar eigen
                winkel in Diepenbeek.
              </p>
            </div>
          </div>
          <p className="heart text-center">
            <i className="icon-heart2"></i>
          </p>
          <div className="couple-half">
            <div className="bride">
              <img src="images/Pascal.jpg" alt="groom" className="img-responsive" />
            </div>
            <div className="desc-bride">
              <h3>Pascal Van Ootegem</h3>
              <p>
                Pascal is op 24 januari geboren in Aarle. Daar is hij als kleuter opgegroeid. Later is hij met z’n
                familie verhuist naar Leopoldsburg, waar hij het grootste deel van z’n jeugd heeft doorgebracht. Als
                jonge man is hij uiteindelijk neergestreken in Hasselt. Samen met Joke & Nicole woont hij nu in hun huis
                in Diepenbeek.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  </div>
);
