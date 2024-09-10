import { useState, useEffect } from 'react';
import { Editor } from '@monaco-editor/react';
import { getIntrospectionQuery, parse, print } from 'graphql';
import { useNavigate, useSearchParams } from '@remix-run/react';

import styles from './graphiql-client.module.scss';
import Button from '../../ui/button/button';
import Response from '../../component/response/response';
import example from './exampleForGraphiQL';

interface GraphQLResponse {
  data?: Record<string, unknown>;
  error?: string;
}

function GraphiqlClient() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [endpoint, setEndpoint] = useState<string>(example.endpoint);
  const [sdlEndpoint, setSdlEndpoint] = useState<string>(example.sdlEndpoint);
  const [query, setQuery] = useState<string>(print(parse(example.query)));
  const [variables, setVariables] = useState<string>('{}');
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
  //     if (query && variables && headers) {
  //       fetchGraphQL({ query, variables: JSON.parse(variables || '{}') });
  //     }
  //   }, [query, variables, headers]);

  const handleSubmit = () => {
    setResponse(null);
    setResponseError(null);

    setHeaders(JSON.stringify(JSON.parse(headers), null, 2));
    setQuery(print(parse(query)));

    try {
      const searchParamsLocal = new URLSearchParams({
        query,
        variables,
        headers,
        fetchSchema: 'true',
      });

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
      <div className={styles.selector}>
        <label htmlFor="endpoint">Endpoint URL:</label>
        <input
          id="endpoint"
          type="text"
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
        />
      </div>

      <div className={styles.selector}>
        <label htmlFor="sdl-endpoint">SDL Endpoint URL:</label>
        <input
          id="sdl-endpoint"
          type="text"
          value={sdlEndpoint}
          onChange={(e) => setSdlEndpoint(e.target.value)}
        />
      </div>

      <div className={styles.selector}>
        <label htmlFor="headers-editor">Headers:</label>
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
        <label htmlFor="query-editor">GraphQL Query Editor:</label>
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
        <label htmlFor="variables-editor">Variables Editor:</label>
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
        Run Query
      </Button>

      <div className={styles.selector}>
        {response !== null ? (
          <Response
            responseStatus={responseStatus}
            response={response}
            error={responseError}
          />
        ) : (
          'No response yet'
        )}
      </div>

      <div className={styles.selector}>
        {documentation !== '' ? (
          <>
            Documentation (SDL):
            <Response
              responseStatus={documentationStatus}
              response={documentation}
              error={documentationError}
            />
          </>
        ) : (
          'No documentation (SDL) yet'
        )}
      </div>
    </div>
  );
}

export default GraphiqlClient;
