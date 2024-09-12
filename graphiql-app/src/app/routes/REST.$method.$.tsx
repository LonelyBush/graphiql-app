import {
  Form,
  useActionData,
  useLocation,
  useNavigate,
  useParams,
} from '@remix-run/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { LoaderFunctionArgs } from '@remix-run/server-runtime';
import { decodeToString, encodeToBase64 } from '../../utils/const/base64';
import styles from '../../components/base/rest-full-client/rest-full-client.module.scss';
import BodyHeadersTabs from '../../components/component/rest-body-headers/rest-body-headers';
import Button from '../../components/ui/button/button';
import Response from '../../components/component/response/response';
import dynamicPathConverter from '../../utils/dynamic-path-converter/dynamic-path-conv';
import { addRestLinks } from '../../lib/slices/rest-history-slice';
import {
  RequestData,
  RequestItem,
  ActionResponse,
} from '../../types/interface';

export const action = async ({ request }: LoaderFunctionArgs) => {
  const formData = await request.formData();
  const method = formData.get('method') as string;
  const url = formData.get('url') as string;
  const headers = formData.get('headers') as string;
  const body = formData.get('body') as string;

  const parsedHeaders = headers ? JSON.parse(headers) : {};
  const options: RequestInit = {
    method,
    headers: parsedHeaders,
    body: method !== 'GET' ? body : undefined,
  };

  try {
    const res = await fetch(url, options);
    const responseBody = await res.text();
    return {
      status: res.status,
      data: responseBody,
    };
  } catch (error) {
    return { error: 'Network error' };
  }
};

function RESTFullPage() {
  const navigate = useNavigate();
  const params = useParams();
  const actionData = useActionData<ActionResponse>();
  const location = useLocation();
  const [method, setMethod] = useState(params.method || 'GET');
  const [url, setUrl] = useState(params['*']?.split('/')![0] || '');
  const [headers, setHeaders] = useState('');
  const [body, setBody] = useState('');
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const response = actionData?.data || '';
  const responseStatus = actionData?.status || null;
  const error = actionData?.error || null;

  const handleStoreSafe = async () => {
    const requestTime = new Date().toISOString();
    const requestData: RequestData = {
      url,
      method,
      headers,
      body: method !== 'GET' ? body : undefined,
    };

    const requestItemStore: RequestItem = {
      urlPage: location.pathname.replace('/REST/', ''),
      requestData,
      data: requestTime,
    };
    dispatch(addRestLinks([requestItemStore]));
  };

  useEffect(() => {
    setMethod(params.method!);
    if (params['*']) {
      if (params['*'].split('/').length > 2) {
        navigate('/errorPage');
      }
      try {
        setUrl(decodeToString(params['*']?.split('/')[0]));
      } catch (err) {
        if (err instanceof Error) {
          navigate('/errorPage');
        }
      }
    }
  }, [params.method, params, navigate]);
  return (
    <div className={styles.container}>
      <div className={styles.RestBlock}>
        <h2>{t('RESTClient')}</h2>
        <div className={styles.methodSection}>
          <Form
            className={styles.formAction}
            method="post"
            action={`/REST/${method}/${params['*']}${location.search}`}
          >
            <div className={styles.methodBlock}>
              <select
                name="method"
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
                name="url"
                value={url}
                onChange={(e) => {
                  const transformed = dynamicPathConverter(params['*']);
                  transformed.url = encodeToBase64(e.target.value);
                  const newPath = Object.values(transformed).join('/');
                  navigate(
                    `/REST/${params.method}/${newPath}${location.search}`,
                  );
                  setUrl(e.target.value);
                }}
              />
            </div>
            <input type="hidden" name="headers" value={headers} />
            <input type="hidden" name="body" value={body} />
            <Button btnType="submit" onClick={handleStoreSafe}>
              {t('Send')}
            </Button>
          </Form>
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
        title={t('Response')}
      />
    </div>
  );
}

export default RESTFullPage;
