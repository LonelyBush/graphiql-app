import { Links, Meta, Scripts } from '@remix-run/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../utils/launguages/i18n';
import Layout from '../components/layout/layout';
import Footer from '../components/footer/footer';
import StoreProvider from '../lib/StoreProvider';
import ErrorBoundaryComponent from '../components/error-boundary/error-boundary';
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
        <ErrorBoundaryComponent>
          <StoreProvider>
            <I18nextProvider i18n={i18n}>
              <Layout />
              <Footer />
            </I18nextProvider>
            <Scripts />
          </StoreProvider>
        </ErrorBoundaryComponent>
      </body>
    </html>
  );
}
