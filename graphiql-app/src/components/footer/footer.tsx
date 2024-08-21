import { Link } from '@remix-run/react';
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="https://rs.school/" className={styles.linkBlock}>
        <div className={styles.logoRS} />
      </Link>
      <p>2024</p>
      <div className={styles.teamBlock}>
        <div className={styles.iconGitHub} />
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
    </footer>
  );
}

export default Footer;
