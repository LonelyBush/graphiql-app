import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/button/button';
import styles from './welcome-component.module.scss';
import { auth } from '../../firebase-auth/firebase';

function WelcomeComponent() {
  const { t } = useTranslation();
  const userName = '';

  const [user] = useAuthState(auth);
  useEffect(() => {
    console.log(user);
  }, [user]);
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
          <>
            {' '}
            <Button btnType="button" to="/rest-full">
              {t('RESTClient')}
            </Button>
            <Button btnType="button" to="/graphiql">
              {t('GraphiQLClient')}
            </Button>
            <Button btnType="button" to="/history">
              {t('History')}
            </Button>
          </>
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
