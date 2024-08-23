import AboutComponent from '../../components/about/about-component';
import WelcomeComponent from '../../components/welcome/welcome';
import styles from '../../styles/page-styles/main-page.module.scss';

function MainPage() {
  return (
    <div className={styles.container}>
      <WelcomeComponent />
      <AboutComponent />
    </div>
  );
}
export default MainPage;
