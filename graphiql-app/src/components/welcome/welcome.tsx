import Button from '../ui/button/button';

import styles from './welcome-component.module.scss';

function WelcomeComponent() {
  const user = false;
  return (
    <div className={styles.contentInner}>
      <h1>Welcome to Undefineds GraphQl</h1>
      <p>
        Welcome to our API Playground! Here, you can seamlessly explore both
        REST and GraphQL APIs in one powerful and intuitive interface. Whether
        you are sending HTTP requests or crafting complex GraphQL queries, our
        platform gives you the tools to interact with APIs effortlessly. Dive
        into the world of endless possibilities, streamline your workflow, and
        unlock the full potential of your data. Happy exploring!
      </p>

      {user ? (
        <Button btnType="button" to="/main">
          Main Page
        </Button>
      ) : (
        <div>
          <Button btnType="button" to="/sig-in">
            Sig In
          </Button>
          <Button btnType="button" to="/sig-up">
            Sig Up
          </Button>
        </div>
      )}
    </div>
  );
}

export default WelcomeComponent;
