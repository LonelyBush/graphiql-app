import Button from '../ui/button/button';
import styles from './welcome-component.module.scss';

function WelcomeComponent() {
  const userName = '';
  return (
    <div className={styles.contentInner}>
      <h1 className={styles.title}>
        {userName.length === 0 ? 'Welcome!' : `Welcome Back, ${userName}!`}
      </h1>
      <p className={styles.description}>
        Here, you can seamlessly explore both REST and GraphQL APIs in one
        powerful and intuitive interface. Whether you are sending HTTP requests
        or crafting complex GraphQL queries, our platform gives you the tools to
        interact with APIs effortlessly. Dive into the world of endless
        possibilities, streamline your workflow, and unlock the full potential
        of your data. Happy exploring!
      </p>
      <div className={styles.buttonBlock}>
        {userName.length > 0 ? (
          <>
            {' '}
            <Button btnType="button" to="/">
              REST Client
            </Button>
            <Button btnType="button" to="/">
              GraphiQL Client
            </Button>
            <Button btnType="button" to="/">
              History
            </Button>
          </>
        ) : (
          <>
            {' '}
            <Button btnType="button" to="/login">
              Sig In
            </Button>
            <Button btnType="button" to="/registration">
              Sig Up
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default WelcomeComponent;
