import { IAboutUs } from './about-us-info';
import styles from './about-us-card.module.scss';

interface AboutUsCardProps {
  us: IAboutUs;
}

function AboutUsCard({ us }: AboutUsCardProps) {
  return (
    <article className={styles.cardBlock}>
      <div className={`${styles.imgBlock} ${styles[us.img]}`} />
      <div className={styles.cardInfoBlock}>
        <h3 className={styles.cardName}>{us.name}</h3>
        <p className={styles.info}>{us.info}</p>
      </div>
    </article>
  );
}

export default AboutUsCard;
