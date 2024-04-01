import Countdown from 'react-countdown';
import { Couple } from '../components/sections/Couple';
import { EventInfo } from '../components/sections/EventInfo';
import { OurStory } from '../components/sections/OurStory';

export const Homepage = () => {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      // Render a completed state
      return (
        <div className="simply-section simply-days-section">
          <div>
            <span className="simply-amount">66</span>
            <span className="simply-word">days</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="simply-countdown simply-countdown-one">
          <div className="simply-section simply-days-section">
            <div>
              <span className="simply-amount">{days}</span>
              <span className="simply-word">days</span>
            </div>
          </div>
          <div className="simply-section simply-hours-section">
            <div>
              <span className="simply-amount">{hours}</span>
              <span className="simply-word">hours</span>
            </div>
          </div>
          <div className="simply-section simply-minutes-section">
            <div>
              <span className="simply-amount">{minutes}</span>
              <span className="simply-word">minutes</span>
            </div>
          </div>
          <div className="simply-section simply-seconds-section">
            <div>
              <span className="simply-amount">{seconds}</span>
              <span className="simply-word">seconds</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <header
        id="fh5co-header"
        className="fh5co-cover"
        role="banner"
        style={{ backgroundImage: 'url(images/img_bg_2.jpg)' }}
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
                  <Countdown date={new Date('2024-05-18 13:00:00')} renderer={renderer} />
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
