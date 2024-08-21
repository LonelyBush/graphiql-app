import { Links, Meta, Outlet, Scripts } from '@remix-run/react';
import Footer from '../components/footer/footer';
import '../index.scss';

export default function App() {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-react.ico" type="image/x-icon" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
