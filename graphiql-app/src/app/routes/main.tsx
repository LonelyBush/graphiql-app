import Button from '../../components/ui/button/button';
import styles from '../../styles/page-styles/main-page.module.scss';

function MainPage() {
  return (
    <div className={styles.mainBlock}>
      {' '}
      <Button btnType="button" to="/rest-full">
        REST Client
      </Button>
      <Button btnType="button" to="/">
        GraphiQL Client
      </Button>
      <Button btnType="button" to="/">
        History
      </Button>
    </div>
  );
}

export default MainPage;
