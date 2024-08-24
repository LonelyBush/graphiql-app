import { useTranslation } from 'react-i18next';
import AboutUsCard from './about-us-card/about-us-card';
import styles from './about-component.module.scss';

function AboutComponent() {
  const { t } = useTranslation();
  return (
    <div className={styles.contentInner}>
      <h2>{t('OurUndefinedsTeam')}</h2>
      <div className={styles.aboutUsBlock}>
        <AboutUsCard />
      </div>
      <h2>{t('AboutTeam')}</h2>
      <p className={styles.description}>{t('TeamDescription')}</p>
      <h2>{t('AboutCourse')}</h2>
      <p className={styles.description}>{t('CourseDescription')}</p>
    </div>
  );
}

export default AboutComponent;
