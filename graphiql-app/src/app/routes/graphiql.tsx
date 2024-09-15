import { useEffect, useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { useTranslation } from 'react-i18next';
import { getIntrospectionQuery, parse, print } from 'graphql';
import { useDispatch } from 'react-redux';
import { LoaderFunctionArgs } from '@remix-run/server-runtime';
import { Form, useNavigate, useActionData } from '@remix-run/react';
import Button from '../../components/ui/button/button';
import Response from '../../components/component/response/response';
import styles from '../../styles/page-styles/graphiql-client.module.scss';
import { RequestData, RequestItem } from '../../types/interface';
import { addGraphiQLLinks } from '../../lib/slices/graphiql-history-slice';

interface GraphQLResponse {
  response?: Record<string, unknown>;
  responseDoc?: Record<string, unknown>;
  status?: number;
  statusDoc?: number;
  error?: string;
  errorDoc?: string;

  newUrl?: string;
}

export const action = async ({ request }: LoaderFunctionArgs) => {
  const formData = await request.formData();

  const url = formData.get('endpoint') as string;
  const headers = formData.get('headers') as string;
  const query =
    'query ($filter: FilterCharacter) { characters(filter: $filter) { results { name } } }';
  const variables = formData.get('variables') as string;

  const parsedHeaders = headers ? JSON.parse(headers) : {};

  const options: RequestInit = {
    method: 'POST',
    headers: parsedHeaders,
    body: JSON.stringify({ query, variables: JSON.parse(variables || '{}') }),
  };
  const optionsDoc: RequestInit = {
    method: 'POST',
    headers: parsedHeaders,
    body: JSON.stringify({ query: getIntrospectionQuery() }),
  };

  let status: number | undefined;
  let response: unknown;
  let error: string | undefined;
  let statusDoc: number | undefined;
  let responseDoc: unknown;
  let errorDoc: string | undefined;

  try {
    const resDoc = await fetch(url, optionsDoc);
    statusDoc = resDoc.status;
    responseDoc = await resDoc.json();
  } catch (err) {
    errorDoc = `${err}: Bad request data document, try again !`;
  }

  try {
    const res = await fetch(url, options);
    status = res.status;
    response = await res.json();
  } catch (err) {
    error = `${err}: Bad request data, try again !`;
  }

  return {
    status,
    response,
    error,
    statusDoc,
    responseDoc,
    errorDoc,
  };
};

function GraphiqlClient() {
  const actionData = useActionData<GraphQLResponse>();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const response = actionData?.response || '';
  const status = actionData?.status || null;
  const [errorHangle, setErrorHangle] = useState<string | null>(
    actionData?.error || null,
  );

  const responseDoc = actionData?.responseDoc || '';
  const statusDoc = actionData?.statusDoc || null;
  const errorDoc = actionData?.errorDoc || null;

  const [endpointState, setEndpoint] = useState<string>('');
  const [headersState, setHeaders] = useState<string>(
    '{"Content-Type": "application/json"}',
  );
  const [queryState, setQuery] = useState<string>('');
  const [variablesState, setVariables] = useState<string>('{}');

  const [sdlEndpoint, setSdlEndpoint] = useState<string>(
    endpointState === '' ? '' : `${endpointState}?sdl`,
  );
  const [isSdlModified, setIsSdlModified] = useState<boolean>(false);

  useEffect(() => {
    if (!isSdlModified) {
      setSdlEndpoint(endpointState === '' ? '' : `${endpointState}?sdl`);
    }
  }, [endpointState, isSdlModified]);

  const handleEditorChange =
    (setValue: React.Dispatch<React.SetStateAction<string>>) =>
    (value: string | undefined) => {
      if (value !== undefined) {
        setValue(value);
      }
    };

  const handleSdlChange = (value: string) => {
    setIsSdlModified(true);
    setSdlEndpoint(value);
  };

  const handleSubmit = () => {
    try {
      const parsedHeaders = headersState || '{}';
      setHeaders(JSON.stringify(JSON.parse(parsedHeaders), null, 2));
      setQuery(print(parse(queryState)));
      const requestTime = new Date().toISOString();

      const searchParamsLocal = new URLSearchParams({
        endpoint: endpointState,
        query: queryState,
        variables: variablesState,
        headers: headersState,
      });

      const requestData: RequestData = {
        url: endpointState,
        sdlUrl: sdlEndpoint,
        method: 'GRAPHIQL',
        headers: headersState,
        variables: variablesState,
        query: queryState,
      };

      const graphiQLItemStore: RequestItem = {
        urlPage: `?${searchParamsLocal.toString()}`,
        requestData,
        data: requestTime,
      };
      dispatch(addGraphiQLLinks([graphiQLItemStore]));
      navigate(`?${searchParamsLocal.toString()}`, { replace: true });
    } catch (err) {
      setErrorHangle(errorHangle + String(err));
    }
  };

  return (
    <div className={styles.wrapperGraphi}>
      <h2 className={styles.title}>{t('GraphiQLClient')}</h2>
      <div className={styles.inputContainer}>
        <div className={styles.inputBlock}>
          <div className={styles.inputInner}>
            <label htmlFor="endpoint">{t('EndpointURL')}:</label>
            <input
              id="endpoint"
              type="text"
              value={endpointState}
              onChange={(e) => {
                setEndpoint(e.target.value);
                navigate(
                  `?${new URLSearchParams({ endpoint: e.target.value }).toString()}`,
                  { replace: true },
                );
              }}
              className={styles.inputUrl}
            />
          </div>

          <div className={styles.inputInner}>
            <label htmlFor="sdl-endpoint">{t('SDLEndpointURL')}:</label>
            <input
              id="sdl-endpoint"
              type="text"
              value={sdlEndpoint}
              className={styles.inputUrl}
              onChange={(e) => handleSdlChange(e.target.value)}
            />
          </div>
        </div>

        <Form method="post" id="autoSubmitForm">
          <input type="hidden" name="headers" value={headersState} />
          <input type="hidden" name="query" value={queryState} />
          <input type="hidden" name="endpoint" value={endpointState} />
          <input type="hidden" name="variables" value={variablesState} />

          <Button btnType="submit" onClick={handleSubmit}>
            {t('Send')}
          </Button>
        </Form>
      </div>

      <div>
        <label htmlFor="headers-editor">{t('Headers')}:</label>
        <div id="headers-editor">
          <Editor
            height="150px"
            language="json"
            value={headersState}
            onChange={handleEditorChange(setHeaders)}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="query-editor">{t('GraphiQLQueryEditor')}:</label>
        <div id="query-editor">
          <Editor
            height="150px"
            language="graphql"
            value={queryState}
            onChange={handleEditorChange(setQuery)}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="variables-editor">{t('VariablesEditor')}:</label>
        <div id="variables-editor">
          <Editor
            height="150px"
            language="json"
            value={variablesState}
            onChange={handleEditorChange(setVariables)}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>
      </div>
      <Response
        title={t('Response')}
        responseStatus={status}
        response={JSON.stringify(response, null, 2)}
        error={errorHangle}
      />
      {'responseStatus' && (
        <Response
          title={t('DocumentationSDL')}
          responseStatus={statusDoc}
          response={JSON.stringify(responseDoc, null, 2)}
          error={errorDoc}
        />
      )}
    </div>
  );
}

export default GraphiqlClient;
