import { IAboutUs } from './about-us-info';
import styles from './about-us-card.module.scss';

interface AboutUsCardProps {
  us: IAboutUs;
}

function AboutUsCard({ us }: AboutUsCardProps) {
  return (
    <article className={styles.cardBlock}>
      <div className={styles.imgBlock}>
        <img src={us.img} alt={us.name} className={styles.img} />
      </div>
      <div className={styles.cardInfoBlock}>
        <h3 className={styles.cardName}>{us.name}</h3>
        <p className={styles.info}>{us.info}</p>
      </div>
    </article>
  );
}

export default AboutUsCard;
