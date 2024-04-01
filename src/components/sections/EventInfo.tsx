import ScrollAnimation from 'react-animate-on-scroll';

export const EventInfo = () => {
  return (
    <div id="fh5co-event" className="fh5co-bg" style={{ backgroundImage: 'url(images/img_bg_3.jpg)' }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
              <span>Our Special Events</span>
              <h2>Wedding Events</h2>
            </ScrollAnimation>
          </div>
        </div>
        <div className="row">
          <div className="display-t">
            <div className="display-tc">
              <div className="col-md-10 col-md-offset-1">
                <ScrollAnimation animateIn="animate__fadeInDown" animateOnce>
                  <div className="col-md-6 col-sm-6 text-center">
                    <div className="event-wrap animate-box">
                      <h3>Het Jawoord</h3>
                      <div className="event-col">
                        <i className="icon-clock"></i>
                        <span>13:00 uur</span>
                      </div>
                      <div className="event-col">
                        <i className="icon-calendar"></i>
                        <span>18 Mei, 2024</span>
                      </div>
                      <p>
                        Wij geven elkaar het jawoord op 18 mei om 13:00 uur in het gemeentehuis van Diepenbeek. Je bent
                        welkom om hier een kijkje te komen nemen.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce delay={200}>
                  <div className="col-md-6 col-sm-6 text-center">
                    <div className="event-wrap animate-box">
                      <h3>Avondfeest </h3>
                      <div className="event-col">
                        <i className="icon-clock"></i>
                        <span>20:00 uur</span>
                      </div>
                      <div className="event-col">
                        <i className="icon-calendar"></i>
                        <span>18 Mei, 2024</span>
                      </div>
                      <p>
                        Graag nodigen wij jou uit om deze feestelijke dag met ons te vieren. Het avondfeest zal
                        plaatsvinden om 20:00 uur in OC Lutselus, Pastorijstraat 7, 3590 Diepenbeek.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
