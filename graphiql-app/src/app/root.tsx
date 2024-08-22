import { Links, Meta, Scripts } from '@remix-run/react';
import Layout from '../components/layout/layout';
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
        <Layout />
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
