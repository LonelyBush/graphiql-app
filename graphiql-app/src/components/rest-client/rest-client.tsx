import { useState } from 'react';
import Button from '../ui/button/button';

const methods = ['GET', 'POST', 'PUT', 'DELETE'];

function RestClient() {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState<{ status: number; body: string }>({
    status: 0,
    body: '',
  });

  const handleRequest = async () => {
    try {
      const options: RequestInit = { method, headers: {} };

      if (method !== 'GET') {
        options.body = body;
      }

      const res = await fetch(url, options);
      const resBody = await res.text();
      setResponse({ status: res.status, body: resBody });
    } catch (error) {
      setResponse({ status: 0, body: 'Error' });
    }
  };

  return (
    <div>
      <header>
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          {methods.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Endpoint URL"
        />
      </header>

      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Request Body"
      />

      <Button btnType="button" onClick={handleRequest}>
        Send Request
      </Button>

      <section>
        <h3>Response</h3>
        <p>Status: {response.status}</p>
        <pre>{response.body}</pre>
      </section>
    </div>
  );
}

export default RestClient;
