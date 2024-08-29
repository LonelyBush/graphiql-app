import { useTranslation } from 'react-i18next';
import styles from './response.module.scss';

interface ResponseProps {
  responseStatus: number | null;
  error: string | null;
  response: string;
}

function Response({ responseStatus, response, error }: ResponseProps) {
  const { t } = useTranslation();

  return (
    <details className={styles.responseBlock}>
      <summary className={styles.responseSummary}>
        <span>{t('Response')} </span>
        {responseStatus !== null && (
          <span
            className={`${responseStatus < 300 ? styles.responseStatusOk : styles.responseStatusError}`}
          >
            {t('status')}: {responseStatus}
          </span>
        )}
      </summary>
      <div className={styles.response}>
        {responseStatus === null && !error && (
          <h2 className={styles.noResponse}>{t('NoResponse')}</h2>
        )}

        {responseStatus !== null && (
          <div>
            {response && (
              <div>
                {' '}
                <h4>Body:</h4>
                <pre>
                  <code className={styles.responseCode}>{response}</code>
                </pre>
              </div>
            )}
            {error && (
              <div>
                <h3>Error:</h3>
                <pre className={styles.responseCode}>{error}</pre>
              </div>
            )}
          </div>
        )}
      </div>
    </details>
  );
}

export default Response;
