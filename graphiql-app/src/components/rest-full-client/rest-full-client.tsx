import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/button/button';
import Response from '../response/response';
import styles from './rest-full-client.module.scss';
import BodyHeadersTabs from '../rest-body-headers/rest-body-headers';

function RESTFullClient() {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');
  const [headers, setHeaders] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState('');
  const [responseStatus, setResponseStatus] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();
  const handleRequest = async () => {
    setResponse('');
    setError(null);

    try {
      const options: RequestInit = {
        method,
        headers: headers ? JSON.parse(headers) : {},
        body: method !== 'GET' ? body : undefined,
      };

      const res = await fetch(url, options);

      if (!res.ok) {
        setResponseStatus(res.status);
        const errorText = await res.text();
        setError(errorText);
        return;
      }

      setResponseStatus(res.status);
      const data = await res.text();
      try {
        setResponse(JSON.stringify(JSON.parse(data), null, 2));
      } catch {
        setResponse(data);
      }
    } catch (err) {
      setError('Network error');
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.RestBlock}>
        <h2>{t('RESTClient')}</h2>
        <div className={styles.methodSection}>
          <div className={styles.methodBlock}>
            <select
              className={styles.customSelect}
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
            <input
              className={styles.inputUrl}
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <Button btnType="button" onClick={handleRequest}>
            {t('Send')}
          </Button>
        </div>
        <BodyHeadersTabs setHeaders={setHeaders} setBody={setBody} />
      </div>
      <Response
        responseStatus={responseStatus}
        response={response}
        error={error}
      />
    </div>
  );
}

export default RESTFullClient;
