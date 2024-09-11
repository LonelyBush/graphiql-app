import { useTranslation } from 'react-i18next';
import Button from '../../ui/button/button';
import styles from './welcome-component.module.scss';
import Loading from '../../ui/loading/loading';
import AboutComponent from '../../component/about/about-component';
import useAuth from '../../../utils/hooks/useAuth-hook';

function WelcomeComponent() {
  const { t } = useTranslation();
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className={styles.contentInner}>
        <h1 className={styles.title}>
          {user
            ? `${t('WelcomeBack')}, ${user?.displayName}!`
            : `${t('Welcome')}!`}
        </h1>
        <p className={styles.description}>{t('ProjectDescription')}</p>
        <div className={styles.buttonBlock}>
          {user ? (
            <>
              <Button btnType="button" to="/REST/GET">
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
      <AboutComponent />
    </>
  );
}

export default WelcomeComponent;
