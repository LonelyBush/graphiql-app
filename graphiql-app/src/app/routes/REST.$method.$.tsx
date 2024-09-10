import { useLoaderData, useLocation, useNavigate } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { LoaderFunctionArgs } from '@remix-run/server-runtime';
import { RequestData, RequestItem } from '../../types/interface';
import createEncodedUrl, {
  decodeToString,
  encodeToBase64,
} from '../../utils/const/base64';
import { addRestLinks } from '../../lib/slices/rest-history-slice';
import styles from '../../components/base/rest-full-client/rest-full-client.module.scss';
import BodyHeadersTabs from '../../components/component/rest-body-headers/rest-body-headers';
import Button from '../../components/ui/button/button';
import Response from '../../components/component/response/response';
import dynamicPathConverter from '../../utils/dynamic-path-converter/dynamic-path-conv';

export const loader = ({ params }: LoaderFunctionArgs) => {
  return params;
};

interface RequestItemProps {
  /* eslint-disable react/require-default-props */
  requestItem?: RequestItem;
}

function RESTFullPage({ requestItem }: RequestItemProps) {
  const navigate = useNavigate();
  const params = useLoaderData<typeof loader>();
  const location = useLocation();
  const [method, setMethod] = useState(params.method || 'GET');
  const [url, setUrl] = useState(params['*']?.split('/')![0] || '');
  const [headers, setHeaders] = useState('');
  const [body, setBody] = useState(requestItem?.requestData.body || '');
  const [response, setResponse] = useState('');
  const [responseStatus, setResponseStatus] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleRequest = async () => {
    setResponse('');
    setError(null);
    const requestTime = new Date().toISOString();

    const parsedHeaders = headers ? JSON.parse(headers) : {};

    const requestData: RequestData = {
      url,
      method,
      headers: parsedHeaders,
      body: method !== 'GET' ? body : undefined,
    };

    const urlPage = createEncodedUrl(
      method,
      url,
      method !== 'GET' ? body : '',
      parsedHeaders,
    );

    const requestItemStore: RequestItem = {
      urlPage,
      requestData,
      data: requestTime,
    };

    dispatch(addRestLinks([requestItemStore]));

    try {
      const options: RequestInit = {
        method,
        headers: parsedHeaders,
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
  useEffect(() => {
    setMethod(params.method!);
    if (params['*']) {
      if (params['*'].split('/').length > 2) {
        navigate('/errorPage');
      }
      setUrl(decodeToString(params['*']?.split('/')[0]));
    }
  }, [params.method, params, navigate]);
  return (
    <div className={styles.container}>
      <div className={styles.RestBlock}>
        <h2>{t('RESTClient')}</h2>
        <div className={styles.methodSection}>
          <div className={styles.methodBlock}>
            <select
              className={styles.customSelect}
              value={method}
              onChange={(e) => {
                navigate(
                  `/REST/${e.target.value}/${params['*']}${location.search}`,
                );
                setMethod(e.target.value);
              }}
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
              onChange={(e) => {
                const transformed = dynamicPathConverter(params['*']);
                transformed.url = encodeToBase64(e.target.value);
                const newPath = Object.values(transformed).join('/');
                navigate(`/REST/${params.method}/${newPath}${location.search}`);
                setUrl(e.target.value);
              }}
            />
          </div>
          <Button btnType="button" onClick={handleRequest}>
            {t('Send')}
          </Button>
        </div>
        <BodyHeadersTabs
          params={params || {}}
          setHeaders={setHeaders}
          setBody={setBody}
        />
      </div>
      <Response
        responseStatus={responseStatus}
        response={response}
        error={error}
      />
    </div>
  );
}

export default RESTFullPage;
