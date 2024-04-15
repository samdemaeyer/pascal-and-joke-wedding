import ScrollAnimation from 'react-animate-on-scroll';

export const EventInfo = () => (
  <>
    <div
      id="fh5co-event"
      className="fh5co-bg"
      style={{ backgroundImage: 'url(images/img_bg_3.jpg)', marginBottom: '2rem' }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
              <span>Ons Speciaal Event</span>
              <h2>Trouw details</h2>
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
                        <span>13:30 uur</span>
                      </div>
                      <div className="event-col">
                        <i className="icon-calendar"></i>
                        <span>Zaterdag</span>
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
                        <span>04:00 uur</span>
                      </div>
                      <div className="event-col">
                        <i className="icon-calendar"></i>
                        <span>Zaterdag</span>
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
    <div className="container-fluid">
      <div className="row">
        <div className="display-t">
          <div className="display-tc">
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce className="col-md-6 col-sm-6 text-center">
              <iframe
                title="Diepenbeek Gemeentehuis map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8556.29422939766!2d5.4116260018863125!3d50.908984022586836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c12072c9ab507d%3A0x626362254da8bfd2!2sDorpsstraat%2014%2C%203590%20Diepenbeek%2C%20Belgium!5e0!3m2!1sen!2suk!4v1712827517380!5m2!1sen!2suk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce className="col-md-6 col-sm-6 text-center">
              <iframe
                title="Diepenbeek, OC Lutselus map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16548.983020713058!2d5.437678997613295!3d50.91560844412576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0df9b7dca094f%3A0x1ded8f7e4dbee042!2sPastorijstraat%207%2C%203590%20Diepenbeek%2C%20Belgium!5e0!3m2!1sen!2suk!4v1712827750683!5m2!1sen!2suk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  </>
);
