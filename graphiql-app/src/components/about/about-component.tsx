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
      <h2>About team</h2>
      <p className={styles.description}>
        Our team consists of skilled and enthusiastic professionals who are
        dedicated to crafting outstanding user interfaces. The team is committed
        to continuous learning, ensuring they stay current with the latest
        frontend technologies and industry trends. They actively explore new
        frameworks, libraries, and tools to enhance their work, delivering
        high-quality and modern digital experiences
      </p>
      <h2>About course</h2>
      <p className={styles.description}>
        React course covers essential technologies and tools, ensuring you are
        well-equipped for real-world development challenges. You will deepen
        your expertise in React, Redux, Next.js, TypeScript, master Git and
        GitHub commands, enhance your ability to debug and optimize with Chrome
        DevTools. This course is the perfect next step for advancing your
        frontend development career.
      </p>
    </div>
  );
}

export default AboutComponent;
