import { useTranslation } from 'react-i18next';
import yana from '../../../assets/img/yana.jpg';
import roman from '../../../assets/img/roman.jpg';
import nikita from '../../../assets/img/nikita.jpg';
import styles from './about-us-card.module.scss';

function AboutUsCard() {
  const { t } = useTranslation();
  return (
    <>
      <article className={styles.cardBlock}>
        <div className={styles.imgBlock}>
          <img src={roman} alt={t('RomanSokolov')} className={styles.img} />
        </div>
        <div className={styles.cardInfoBlock}>
          <h3 className={styles.cardName}>{t('RomanSokolov')}</h3>
          <p className={styles.info}>{t('RomanText')}</p>
        </div>
      </article>
      <article className={styles.cardBlock}>
        <div className={styles.imgBlock}>
          <img src={yana} alt={t('YanaDyachok')} className={styles.img} />
        </div>
        <div className={styles.cardInfoBlock}>
          <h3 className={styles.cardName}>{t('YanaDyachok')}</h3>
          <p className={styles.info}>{t('YanaText')}</p>
        </div>
      </article>
      <article className={styles.cardBlock}>
        <div className={styles.imgBlock}>
          <img src={nikita} alt={t('NikitaRadevich')} className={styles.img} />
        </div>
        <div className={styles.cardInfoBlock}>
          <h3 className={styles.cardName}>{t('NikitaRadevich')}</h3>
          <p className={styles.info}>{t('NikitaText')}</p>
        </div>
      </article>
    </>
  );
}

export default AboutUsCard;
