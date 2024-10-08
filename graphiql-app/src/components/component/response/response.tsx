import { useTranslation } from 'react-i18next';
import { Editor } from '@monaco-editor/react';
import { AiOutlineApi } from 'react-icons/ai';
import styles from './response.module.scss';

interface ResponseProps {
  title: string;
  responseStatus: number | null;
  error: string | null;
  response: string;
}

function Response({ title, responseStatus, response, error }: ResponseProps) {
  const { t } = useTranslation();

  return (
    <details className={styles.responseBlock}>
      <summary className={styles.responseSummary}>
        <span>{title}</span>
        {responseStatus !== null && (
          <span
            className={
              responseStatus < 300
                ? styles.responseStatusOk
                : styles.responseStatusError
            }
          >
            {title !== t('DocumentationSDL') &&
              `${t('status')}: ${responseStatus}`}
          </span>
        )}
      </summary>

      <div className={styles.response}>
        {responseStatus === null && !error && (
          <>
            <AiOutlineApi color="#e9c2c5" size="8rem" />
            <h2 className={styles.noResponse}>{t('NoResponse')}</h2>
          </>
        )}

        {responseStatus !== null && !error && response && (
          <Editor
            theme="vs-dark"
            loading="Loading..."
            height="50vh"
            defaultLanguage="json"
            defaultValue={response}
            options={{ readOnly: true }}
          />
        )}

        {error && (
          <div>
            <h3>{t('Error')}:</h3>
            <Editor
              theme="vs-dark"
              loading="Loading..."
              height="50vh"
              defaultLanguage="json"
              defaultValue={error}
              options={{ readOnly: true }}
            />
          </div>
        )}
      </div>
    </details>
  );
}

export default Response;
