import { Couple } from 'components/sections/Couple';
import { SyntheticEvent } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const Contact = () => {
  return (
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
                  <h1>Contact Us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Couple />
      <div className="fh5co-section">
        <div className="container">
          <div className="row">
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
              <div className="col-md-6 col-md-push-6 animate-box">
                <h3>Get In Touch</h3>
                <form
                  onSubmit={(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
                    event.preventDefault();
                    const formData = new FormData(event.target as HTMLFormElement);
                    const fname = formData.get('fname');
                    const lname = formData.get('lname');
                    const subject = formData.get('subject');
                    const message = formData.get('message');
                    window.location.href = `mailto:user@example.com?subject=${subject}&body=${fname}%20${lname}%0D%0A%0D%0A${message}`;
                  }}
                >
                  <div className="row form-group">
                    <div className="col-md-6">
                      <label htmlFor="fname">First Name</label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        className="form-control"
                        placeholder="Your firstname"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lname">Last Name</label>
                      <input type="text" id="lname" name="lname" className="form-control" placeholder="Your lastname" />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        placeholder="Your subject of this message"
                      />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                        className="form-control"
                        placeholder="Write us something"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Send Message" className="btn btn-primary" />
                  </div>
                </form>
              </div>
              <div className="col-md-5 col-md-pull-5 animate-box">
                <div className="fh5co-contact-info">
                  <h3>Contact Information</h3>
                  <ul>
                    <li className="address">
                      Ceremoniemeester: <br /> Sophie Swennen
                    </li>
                    <li className="phone">
                      <a href="tel://+32497229735">+32 (0) 497229735</a>
                    </li>
                    <li className="email">
                      <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
};
