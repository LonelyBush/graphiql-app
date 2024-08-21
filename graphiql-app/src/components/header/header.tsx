import { Link } from '@remix-run/react';
import ToggleLanguages from '../toggle-languages/toggle-languages';
import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoLink}>
        <div className={styles.logo} />
      </Link>
      <ToggleLanguages />
    </header>
  );
}

export default Header;
