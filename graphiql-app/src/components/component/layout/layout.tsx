import { Outlet, useMatches } from '@remix-run/react';
import Header from '../header/header';

export default function Layout() {
  const matches = useMatches();
  const isErrorPage = matches.some(
    (match) => (match.handle as { hideHeader?: boolean })?.hideHeader,
  );

  return (
    <>
      {!isErrorPage && <Header />}
      <Outlet />
    </>
  );
}
