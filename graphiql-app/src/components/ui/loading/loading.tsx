import styles from './loading.module.scss';

function Loading() {
  return (
    <section className={styles.loaderContainer}>
      <div className={styles.loader} role="status" aria-live="polite" />
    </section>
  );
}

export default Loading;
