import {
  Form,
  useActionData,
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from '@remix-run/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { LoaderFunctionArgs, redirect } from '@remix-run/server-runtime';
import { decodeToString, encodeToBase64 } from '../../utils/const/base64';
import BodyHeadersTabs from '../../components/component/rest-body-headers/rest-body-headers';
import Button from '../../components/ui/button/button';
import Response from '../../components/component/response/response';
import dynamicPathConverter from '../../utils/dynamic-path-converter/dynamic-path-conv';
import { addRestLinks } from '../../lib/slices/rest-history-slice';
import {
  RequestData,
  RequestItem,
  ActionResponse,
  LoaderResponse,
} from '../../types/interface';
import styles from '../../styles/page-styles/rest-full-client.module.scss';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const allowedMethods = ['POST', 'GET', 'DELETE', 'PUT'];

  if (!allowedMethods.includes(params.method!)) {
    return redirect('/bad-method-try-again');
  }

  try {
    decodeToString(params['*'] ? params['*']?.split('/')[0] : '');
  } catch (err) {
    if (err instanceof Error) {
      return redirect('/bad-request-route-try-again');
    }
  }
  return {
    method: params.method,
    url: decodeToString(params['*'] ? params['*']?.split('/')[0] : ''),
  };
};

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
    const responseBody = await res.json();
    return {
      status: res.status,
      data: responseBody,
    };
  } catch (error) {
    return { error: 'Bad request data, try again !' };
  }
};

function RESTFullPage() {
  const navigate = useNavigate();
  const params = useParams();
  const loaderData = useLoaderData<LoaderResponse>();
  const actionData = useActionData<ActionResponse>();
  const location = useLocation();
  const [method, setMethod] = useState(loaderData.method || 'GET');
  const [url, setUrl] = useState(loaderData.url || '');
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
    const fullUrl = `${location.pathname}${location.search}`;
    const requestItemStore: RequestItem = {
      urlPage: fullUrl.replace('/REST/', ''),
      requestData,
      data: requestTime,
    };
    dispatch(addRestLinks([requestItemStore]));
  };

  useEffect(() => {
    if (params['*']) {
      if (params['*'].split('/').length > 2) {
        navigate('/errorPage');
      }
    }
  }, [params.method, params, navigate, loaderData.url]);
  return (
    <div className={styles.container}>
      <div className={styles.RestBlock}>
        <h2 className={styles.title}>{t('RESTClient')}</h2>
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
                aria-label="url-input"
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
        response={JSON.stringify(response, null, 2)}
        error={error}
        title={t('Response')}
      />
    </div>
  );
}

export default RESTFullPage;
