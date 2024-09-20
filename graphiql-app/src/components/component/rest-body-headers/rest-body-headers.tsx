import { SetStateAction, useEffect, useRef } from 'react';
import { Params, useNavigate, useLocation } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import { Editor, OnChange, OnMount } from '@monaco-editor/react';
import * as monacoEditor from 'monaco-editor';
import { Jsonify } from '@remix-run/server-runtime/dist/jsonify';
import { TabItem, Tabs } from '../../ui/tabs/tabs';
import HeadersRedactor from '../headers-redactor/headers-redactor';
import dynamicPathConverter from '../../../utils/dynamic-path-converter/dynamic-path-conv';
import { decodeToString, encodeToBase64 } from '../../../utils/const/base64';
import styles from './rest-body-headers-style.module.scss';

export default function BodyHeadersTabs({
  setBody,
  setHeaders,
  params,
}: {
  params: Jsonify<Params<string>>;
  setBody: React.Dispatch<SetStateAction<string>>;
  setHeaders: React.Dispatch<SetStateAction<string>>;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const editorRef = useRef<monacoEditor.editor.IStandaloneCodeEditor | null>(
    null,
  );
  const handleBodyEditorChange: OnChange = (editor) => {
    if (editor) setBody(editor);
  };
  const getValue = (): string => {
    return editorRef.current ? editorRef.current.getValue() : '';
  };
  const setValue = (newValue: string): void => {
    if (editorRef.current) editorRef.current.setValue(newValue);
  };
  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.setValue(
      params['*']?.split('/')[1] !== undefined
        ? decodeToString(params['*']?.split('/')[1])
        : '',
    );
  };
  useEffect(() => {
    if (params['*']) {
      if (params['*'].split('/').length > 2) {
        navigate('/errorPage');
      }
      try {
        setBody(
          params['*']?.split('/')[1] !== undefined
            ? decodeToString(params['*']?.split('/')[1])
            : '',
        );
        setValue(
          params['*']?.split('/')[1] !== undefined
            ? decodeToString(params['*']?.split('/')[1])
            : '',
        );
      } catch (err) {
        if (err instanceof Error) {
          navigate('/error');
        }
      }
    }
  }, [params, navigate, setBody]);
  const { t } = useTranslation();
  return (
    <Tabs defaultSelect={0}>
      <TabItem label={t('Body')} index={0}>
        <div
          className={styles.editorWrapper}
          data-testid="editorWrapper"
          onBlur={() => {
            const transformed = dynamicPathConverter(params['*']);
            transformed.body = encodeToBase64(getValue());
            const newPath = !Object.keys(transformed).includes('url')
              ? Object.values(Object.assign({ url: '' }, transformed)).join('/')
              : Object.values(transformed).join('/');
            navigate(`/REST/${params.method}/${newPath}${location.search}`);
          }}
        >
          <Editor
            theme="vs-dark"
            loading="Loading..."
            height="30vh"
            defaultLanguage="json"
            onChange={handleBodyEditorChange}
            onMount={handleEditorDidMount}
          />
        </div>
      </TabItem>
      <TabItem label={t('Headers')} index={1}>
        <HeadersRedactor outerSetHeader={setHeaders} />
      </TabItem>
    </Tabs>
  );
}
