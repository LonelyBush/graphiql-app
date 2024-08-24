import { useTranslation } from 'react-i18next';
import Button from '../ui/button/button';
import styles from './welcome-component.module.scss';

function WelcomeComponent() {
  const { t } = useTranslation();
  const userName = '';
  return (
    <div className={styles.contentInner}>
      <h1 className={styles.title}>
        {userName.length === 0
          ? `${t('Welcome')}!`
          : `${t('WelcomeBack')}, ${userName}!`}
      </h1>
      <p className={styles.description}>{t('ProjectDescription')}</p>
      <div className={styles.buttonBlock}>
        {userName.length > 0 ? (
          <Button btnType="button" to="/main">
            {t('MainPage')}
          </Button>
        ) : (
          <>
            {' '}
            <Button btnType="button" to="/login">
              {t('SignIn')}
            </Button>
            <Button btnType="button" to="/registration">
              {t('SignUp')}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default WelcomeComponent;
