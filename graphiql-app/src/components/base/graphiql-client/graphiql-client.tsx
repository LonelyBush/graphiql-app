import { useState, useEffect } from 'react';
import { Editor } from '@monaco-editor/react';
import { useTranslation } from 'react-i18next';
import { getIntrospectionQuery, parse, print } from 'graphql';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from '@remix-run/react';

import Button from '../../ui/button/button';
import Response from '../../component/response/response';
import example from './exampleForGraphiQL';
import styles from './graphiql-client.module.scss';
import { addGraphiQLLinks } from '../../../lib/slices/graphiql-history-slice';
import {
  RequestItem,
  RequestData,
  RequestItemProps,
} from '../../../types/interface';

interface GraphQLResponse {
  data?: Record<string, unknown>;
  error?: string;
}

function GraphiqlClient({ requestItem }: RequestItemProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [endpoint, setEndpoint] = useState<string>(
    requestItem?.requestData.url || example.endpoint,
  );
  const [sdlEndpoint, setSdlEndpoint] = useState<string>(
    requestItem?.requestData.sdlUrl || example.sdlEndpoint,
  );
  const [query, setQuery] = useState<string>(
    print(parse(requestItem?.requestData.query || example.query)),
  );
  const [variables, setVariables] = useState<string>(
    requestItem?.requestData.variables || '{}',
  );
  const [headers, setHeaders] = useState<string>(
    JSON.stringify(JSON.parse(example.headers), null, 2),
  );

  const [response, setResponse] = useState<string | null>(null);
  const [responseStatus, setResponseStatus] = useState<number | null>(null);
  const [responseError, setResponseError] = useState<string | null>(null);

  const [documentation, setDocumentation] = useState<string>('');
  const [documentationStatus, setDocumentationStatus] = useState<number | null>(
    null,
  );
  const [documentationError, setDocumentationError] = useState<string | null>(
    null,
  );

  const [shouldFetchSchema, setShouldFetchSchema] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleError = (error: unknown) => {
    if (error instanceof Error) {
      setResponseError(`Error: ${error.message}`);
    } else {
      setResponseError(`Error: ${String(error)}`);
    }
  };

  const fetchSchema = async () => {
    if (!sdlEndpoint) return;

    try {
      const res = await fetch(sdlEndpoint, {
        method: 'POST',
        headers: {
          ...JSON.parse(headers || '{}'),
        },
        body: JSON.stringify({ query: getIntrospectionQuery() }),
      });
      setDocumentationStatus(res.status);
      const result: GraphQLResponse = await res.json();
      if (result.data) {
        setDocumentation(JSON.stringify(result.data, null, 2));
      } else if (result.error) {
        setDocumentationError(result.error);
      }
    } catch (error) {
      setDocumentationError('Error fetching schema');
    }
  };

  useEffect(() => {
    const urlQuery = searchParams.get('query');
    const urlVariables = searchParams.get('variables');
    const urlHeaders = searchParams.get('headers');
    const fetchSchemaParam = searchParams.get('fetchSchema');

    if (urlQuery) setQuery(urlQuery);
    if (urlVariables) setVariables(urlVariables);
    if (urlHeaders) setHeaders(urlHeaders);
    if (fetchSchemaParam === 'true') {
      setShouldFetchSchema(true);
    }
  }, [searchParams]);

  useEffect(() => {
    if (shouldFetchSchema) {
      fetchSchema();
    }
  }, [shouldFetchSchema, sdlEndpoint, headers]);

  const fetchGraphQL = async (graphQLParams: Record<string, unknown>) => {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          ...JSON.parse(headers || '{}'),
        },
        body: JSON.stringify(graphQLParams),
      });

      setResponseStatus(res.status);

      if (!res.ok) {
        const errorResponse = await res.text();
        throw new Error(`Error ${res.status}: ${errorResponse}`);
      }

      const result = await res.json();
      setResponse(JSON.stringify(result, null, 2));
      setResponseError(null);
    } catch (error) {
      handleError(error);
    }
  };

  //   useEffect(() => {
  //
  //     if (query && variables && headers) {
  //       fetchGraphQL({ query, variables: JSON.parse(variables || '{}') });
  //     }
  //   }, [query, variables, headers]);

  const handleSubmit = () => {
    setResponse(null);
    setResponseError(null);

    setHeaders(JSON.stringify(JSON.parse(headers), null, 2));
    setQuery(print(parse(query)));
    const requestTime = new Date().toISOString();
    try {
      const searchParamsLocal = new URLSearchParams({
        query,
        variables,
        headers,
        fetchSchema: 'true',
      });

      const requestData: RequestData = {
        url: endpoint,
        sdlUrl: sdlEndpoint,
        method: 'GRAPHIQL',
        headers,
        variables,
        query,
      };

      const graphiQLItemStore: RequestItem = {
        urlPage: `?${searchParamsLocal.toString()}`,
        requestData,
        data: requestTime,
      };

      dispatch(addGraphiQLLinks([graphiQLItemStore]));

      navigate(`?${searchParamsLocal.toString()}`, { replace: true });
      fetchGraphQL({ query, variables: JSON.parse(variables || '{}') });
      setShouldFetchSchema(true);
    } catch (error) {
      handleError(error);
    }
  };

  const handleEditorChange =
    (setValue: React.Dispatch<React.SetStateAction<string>>) =>
    (value: string | undefined) => {
      if (value !== undefined) {
        setValue(value);
      }
    };

  return (
    <div className={styles.wrapperGraphi}>
      <h2>{t('GraphiQLClient')}</h2>
      <div className={styles.selector}>
        <label htmlFor="endpoint">{t('EndpointURL')}:</label>
        <input
          id="endpoint"
          type="text"
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
        />
      </div>

      <div className={styles.selector}>
        <label htmlFor="sdl-endpoint">{t('SDLEndpointURL')}:</label>
        <input
          id="sdl-endpoint"
          type="text"
          value={sdlEndpoint}
          onChange={(e) => setSdlEndpoint(e.target.value)}
        />
      </div>

      <div className={styles.selector}>
        <label htmlFor="headers-editor">{t('Headers')}:</label>
        <div id="headers-editor">
          <Editor
            height="150px"
            language="json"
            value={headers}
            onChange={handleEditorChange(setHeaders)}
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>
      </div>

      <div className={styles.selector}>
        <label htmlFor="query-editor">{t('GraphiQLQueryEditor')}:</label>
        <div id="query-editor">
          <Editor
            height="150px"
            language="graphql"
            value={query}
            onChange={handleEditorChange(setQuery)}
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>
      </div>

      <div className={styles.selector}>
        <label htmlFor="variables-editor">{t('VariablesEditor')}:</label>
        <div id="variables-editor">
          <Editor
            height="150px"
            language="json"
            value={variables}
            onChange={handleEditorChange(setVariables)}
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>
      </div>

      <Button btnType="button" onClick={handleSubmit}>
        {t('Send')}
      </Button>
      <Response
        title={t('Response')}
        responseStatus={responseStatus}
        response={response!}
        error={responseError}
      />
      {responseStatus && (
        <Response
          title={t('DocumentationSDL')}
          responseStatus={documentationStatus}
          response={documentation}
          error={documentationError}
        />
      )}
    </div>
  );
}

export default GraphiqlClient;
