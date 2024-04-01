import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './bootstrap.css';
import './icomoon.css';
import 'animate.css/animate.min.css';
import './App.css';
import { Homepage } from './pages/Homepage';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Story } from './pages/Story';

function App() {
  return (
    <Router>
      <div className="App" id="page">
        <nav className="fh5co-nav" role="navigation">
          <div className="container">
            <div className="row">
              <div className="col-xs-2">
                <div id="fh5co-logo">
                  <NavLink to="/">
                    Wedding<strong>.</strong>
                  </NavLink>
                </div>
              </div>
              <div className="col-xs-10 text-right menu-1">
                <ul>
                  <li>
                    <NavLink to="/" exact>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/story" exact>
                      Story
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/gallery" exact>
                      Gallery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" exact>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <Route path="/" exact component={Homepage} />
        <Route path="/story" exact component={Story} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/contact" exact component={Contact} />
      </div>
    </Router>
  );
}

export default App;
