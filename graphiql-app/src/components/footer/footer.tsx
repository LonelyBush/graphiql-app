import { Link } from '@remix-run/react';
import { FaGithub } from 'react-icons/fa';

import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.teamBlock}>
        <FaGithub className={styles.iconGitHub} />
        <nav className={styles.footerNav}>
          {' '}
          <Link to="https://github.com/rs0048" className={styles.link}>
            Roman Sokolov
          </Link>
          <Link to="https://github.com/Yana-Dyachok" className={styles.link}>
            Yana Dyachok
          </Link>
          <Link to="https://github.com/lonelybush" className={styles.link}>
            Nikita Radevich
          </Link>
        </nav>
      </div>
      <p>2024</p>
      <Link to="https://rs.school/" className={styles.linkBlock}>
        <div className={styles.logoRS} />
      </Link>
    </footer>
  );
}

export default Footer;
