import { Countdown } from 'components/Countdown/Countdown';
import { Couple } from 'components/sections/Couple';
import { EventInfo } from 'components/sections/EventInfo';
import { OurStory } from 'components/sections/OurStory';

export const Homepage = () => {
  return (
    <>
      <header
        id="fh5co-header"
        className="fh5co-cover"
        role="banner"
        style={{
          backgroundImage:
            'url(images/miniature-bride-and-groom-standing-outdoors-with-a-blurry-nature-background-free-photo.jpg)',
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <div className="display-t">
                <div className="display-tc animate-box" data-animate-effect="fadeIn">
                  <h1>Shit just got real</h1>
                  <h2>Pascal &amp; Joke Gaan Trouwen</h2>
                  <Countdown />
                  <p>
                    <a href="Wedding_Joke_and_Pascal.ics" className="btn btn-default btn-sm">
                      Save the date
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Couple />
      <EventInfo />
      <OurStory />
    </>
  );
};
