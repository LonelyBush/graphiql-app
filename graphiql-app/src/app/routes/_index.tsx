import AboutComponent from '../../components/about/about-component';
import WelcomeComponent from '../../components/welcome/welcome';
import styles from '../../styles/page-styles/welcome-page.module.scss';

function WelcomePage() {
  return (
    <div className={styles.container}>
      <WelcomeComponent />
      <AboutComponent />
    </div>
  );
}
export default WelcomePage;
