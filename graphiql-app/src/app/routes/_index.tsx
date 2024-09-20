import WelcomeComponent from '../../components/base/welcome/welcome';
import styles from '../../styles/page-styles/welcome-page.module.scss';

function WelcomePage() {
  return (
    <div className={styles.container}>
      <WelcomeComponent />
    </div>
  );
}
export default WelcomePage;
