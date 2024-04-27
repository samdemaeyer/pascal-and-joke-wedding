import { OurStory } from 'components/sections/OurStory';
import { useWindowScroll } from 'hooks/windowScroll';

export const Story = () => {
  const { backgroundPosition } = useWindowScroll();

  return (
    <>
      <header
        id="fh5co-header"
        className="fh5co-cover fh5co-cover-sm"
        role="banner"
        style={{ backgroundImage: 'url(images/family.jpeg)', backgroundPosition }}
      >
        <div className="overlay"></div>
        <div className="fh5co-container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <div className="display-t">
                <div className="display-tc animate-box" data-animate-effect="fadeIn">
                  <h1>Ons verhaal</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <OurStory />
    </>
  );
};
