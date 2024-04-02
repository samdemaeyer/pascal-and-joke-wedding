import ScrollAnimation from 'react-animate-on-scroll';

export const OurStory = () => {
  return (
    <div id="fh5co-couple-story">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
              <span>We Love Each Other</span>
              <h2>Our Story</h2>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts.
              </p>
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
                    <h3 className="timeline-title">First We Meet</h3>
                    <span className="date">December 25, 2015</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                      live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                    </p>
                  </div>
                </ScrollAnimation>
              </li>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge" style={{ backgroundImage: 'url(images/couple-2.jpg)' }}></div>
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">First Date</h3>
                    <span className="date">December 28, 2015</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                      live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                    </p>
                  </div>
                </ScrollAnimation>
              </li>
              <li className="animate-box">
                <div className="timeline-badge" style={{ backgroundImage: 'url(images/couple-3.jpg)' }}></div>
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">In A Relationship</h3>
                    <span className="date">January 1, 2016</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                      live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
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
};
