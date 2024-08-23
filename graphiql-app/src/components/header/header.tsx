
import { useEffect, useState, useRef } from 'react';
import { NavLink } from '@remix-run/react';
import ToggleLanguages from '../toggle-languages/toggle-languages';
import styles from './header.module.scss';

function Header() {
  const user = false;

  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: [1] },
    );

    const currentHeader = headerRef.current;

    if (currentHeader) {
      observer.observe(currentHeader);
    }

    return () => {
      if (currentHeader) {
        observer.unobserve(currentHeader);
      }
    };
  }, []);

  return (
    <>
      <div ref={headerRef} />
      <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? styles.logo : isActive ? styles.logoActive : styles.logo
          }
        />
        <nav className={styles.navHeader}>
          <ToggleLanguages />
          {user ? (
            <button
              type="button"
              className={styles.iconLogOut}
              aria-label="Log out"
            />
          ) : (
            <>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? styles.iconSignUp
                    : isActive
                      ? styles.iconSignUpActive
                      : styles.iconSignUp
                }
              />
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? styles.iconSignIn
                    : isActive
                      ? styles.iconSignInActive
                      : styles.iconSignIn
                }
              />
            </>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;
