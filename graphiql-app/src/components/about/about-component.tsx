import AboutUsCard from './about-us-card/about-us-card';
import { aboutUs } from './about-us-card/about-us-info';
import styles from './about-component.module.scss';

function AboutComponent() {
  return (
    <div className={styles.contentInner}>
      <h2>Our Undefineds Team</h2>
      <div className={styles.aboutUsBlock}>
        {aboutUs.map((us) => (
          <AboutUsCard key={us.img} us={us} />
        ))}
      </div>
      <div className={styles.schoolBlock}>
        <p>
          RS School, run by the Rolling Scopes community since 2013, offers a
          unique, free, community-based online education experience. With over
          600 developer-volunteers from various countries and companies as
          mentors, the program connects people, promotes growth, and ensures
          learning is enjoyable.
        </p>
      </div>
    </div>
  );
}

export default AboutComponent;
