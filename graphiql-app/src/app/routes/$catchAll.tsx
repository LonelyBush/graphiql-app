import { useTranslation } from 'react-i18next';
import Button from '../../components/ui/button/button';
import styles from '../../styles/page-styles/not-found.module.scss';

/* eslint-disable react-refresh/only-export-components */
export const handle = { hideHeader: true };
function CatchAll() {
  const { t } = useTranslation();
  return (
    <div className={styles.errorBlock}>
      <h1 className={styles.title}>{t('NotFound')}</h1>
      <section className={styles.errorContainer}>
        <span className={styles.spanError}>
          <span className={styles.digitFirst}>4</span>
        </span>
        <span className={`${styles.spanError} ${styles.digitSecond}`}>0</span>
        <span className={styles.spanError}>
          <span className={styles.digitThird}>4</span>
        </span>
      </section>
      <Button btnType="button" to="/">
        {t('BackToWelcome')}
      </Button>
    </div>
  );
}

export default CatchAll;
