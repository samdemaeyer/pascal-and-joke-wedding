import { Links, Meta, NavLink, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import '../bootstrap.css';
import '../App.css';
import '../icomoon.css';
import '../animate.min.css';
import { LinksFunction, MetaFunction } from '@remix-run/node';
import { useState } from 'react';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Sacramento' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700' },
  ];
};

export const meta: MetaFunction = () => {
  return [
    { title: 'Pascal & Joke Gaan Trouwen' },
    {
      name: 'description',
      content:
        'Pascal en Joke geven elkaar het jawoord op 18 mei om 13:00 uur in het gemeentehuis van Diepenbeek. Je bent welkom om hier een kijkje te komen nemen',
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const NavLinks = () => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/story">Story</NavLink>
    </li>
    <li>
      <NavLink to="/gallery">Gallery</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
  </ul>
);

export default function App() {
  const [offcanvasNavActive, setOffcanvasNavActive] = useState(false);

  return (
    <div className="App" id="page">
      <button
        className={`js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white ${offcanvasNavActive ? 'active' : ''}`}
        onClick={() => setOffcanvasNavActive(!offcanvasNavActive)}
      >
        <i></i>
      </button>
      <div className={offcanvasNavActive ? 'offcanvas' : ''}>
        <div id="fh5co-offcanvas">
          <NavLinks />
        </div>
      </div>
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
              <NavLinks />
            </div>
          </div>
        </div>
      </nav>
      <Outlet />;
    </div>
  );
}
