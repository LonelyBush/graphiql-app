import Button from '../ui/button/button';
import style from './welcome-page-style.module.scss';

function Welcome() {
  return (
    <div className={style.welcomePageSection}>
      <h2>Welcome !</h2>
      <div className={style.btnSection}>
        <Button to="/login" btnType="button">
          Login
        </Button>
        <Button to="/registration" btnType="button">
          Registration
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
