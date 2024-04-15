import ScrollAnimation from 'react-animate-on-scroll';

export const OurStory = () => (
  <div id="fh5co-couple-story">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
          <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
            <span>We Love Each Other</span>
            <h2>Ons Verhaal</h2>
            <p>Heel lang geleden, toen de dieren nog konden praten was er eens ...</p>
          </ScrollAnimation>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-md-offset-0">
          <ul className="timeline animate-box">
            <li className="animate-box">
              <div className="timeline-badge" style={{ backgroundImage: 'url(images/couple-1.jpg)' }}></div>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">De Eerste Ontmoeting</h3>
                  <span className="date">December ????? 2016</span>
                </div>
                <div className="timeline-body">
                  <p>
                    Onze 2 tortelduifjes hebben elkaar leren kennen in de mooie sporthal van Runkst. Jokes mama Ine &
                    Raf hielpen hier geregeld om iedereen te voorzien van spijs en drank. Hier vertoefde Pascal ook
                    geregeld met zijn kameraden om te genieten van een frisse pint. Of een flesje Jupiler. Ook Joke kwam
                    er al eens over de vloer.
                  </p>
                </div>
              </ScrollAnimation>
            </li>
            <li className="timeline-inverted animate-box">
              <div className="timeline-badge" style={{ backgroundImage: 'url(images/couple-2.jpg)' }}></div>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">In een relatie</h3>
                  <span className="date">Januari 2017</span>
                </div>
                <div className="timeline-body">
                  <p>
                    Ze kenden mekaar dus al een tijdje voor de vonk echt over sloeg. Ze hebben een tijdje gedate om
                    mekaar beter te leren kennen en hun band groeide en groeide. In januari 2017 besloten ze dat het
                    tijd werd om hun liefde aan de wereld te tonen en rond de tijd van de opening van Jokes winkel, werd
                    het dan ook officieel. Ze waren een koppel!
                  </p>
                </div>
              </ScrollAnimation>
            </li>
            <li className="animate-box">
              <div className="timeline-badge" style={{ backgroundImage: 'url(images/couple-3.jpg)' }}></div>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">Het Droomhuis</h3>
                  <span className="date">Juli 2021</span>
                </div>
                <div className="timeline-body">
                  <p>
                    Na een aantal jaren wist Pascal het al zeker, met Joke wil ik samen blijven! In juli 2021 vonden ze
                    hun droomhuis! Gelegen op een prachtige & rustige locatie in Diepenbeek. December van dat jaar zijn
                    ze verhuisd naar hun stulpje. Ze hebben er al veel en hard in gewerkt om er helemaal een thuis van
                    te maken!
                  </p>
                </div>
              </ScrollAnimation>
            </li>
            <li className="timeline-inverted animate-box">
              <div className="timeline-badge" style={{ backgroundImage: 'url(images/couple-2.jpg)' }}></div>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">De Viervoeters</h3>
                  <span className="date">Januari ????? 2022</span>
                </div>
                <div className="timeline-body">
                  <p>
                    In 2022 hebben ze hun gezin uitgebreid met 2 lieve viervoeters: Freya & Vigo. Datzelfde vond Pascal
                    het tijd om “de grote vraag” te stellen. Hij zocht een mooie ring, ging op 1 knie en vroeg Joke ten
                    huwelijk!
                  </p>
                </div>
              </ScrollAnimation>
            </li>
            <li className="animate-box">
              <div className="timeline-badge" style={{ backgroundImage: 'url(images/couple-3.jpg)' }}></div>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">De Trouw</h3>
                  <span className="date">18 mei 2024</span>
                </div>
                <div className="timeline-body">
                  <p>
                    En dat brengt ons naar 18 mei 2024! De dag waarop ze hun ja-woord zullen geven. Samen met hun
                    getuige, vrienden & familie word het een spetterend feest!
                  </p>
                </div>
              </ScrollAnimation>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
