import { Links, Meta, Outlet, Scripts } from '@remix-run/react';
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
        <Scripts />
      </body>
    </html>
  );
}
