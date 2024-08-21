import { Link } from '@remix-run/react';

import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoLink}>
        <div className={styles.logo} />
      </Link>
    </header>
  );
}

export default Header;
