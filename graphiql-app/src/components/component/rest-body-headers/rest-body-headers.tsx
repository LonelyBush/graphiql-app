import { SetStateAction } from 'react';
import { Editor, OnChange } from '@monaco-editor/react';
import { TabItem, Tabs } from '../../ui/tabs/tabs';
import HeadersRedactor from '../headers-redactor/headers-redactor';

export default function BodyHeadersTabs({
  setBody,
  setHeaders,
}: {
  setBody: React.Dispatch<SetStateAction<string>>;
  setHeaders: React.Dispatch<SetStateAction<string>>;
}) {
  const handleBodyEditorChange: OnChange = (editor) => {
    if (editor) setBody(editor);
  };

  return (
    <Tabs defaultSelect={0}>
      <TabItem label="Body" index={0}>
        <Editor
          theme="vs-dark"
          loading="Loading..."
          height="30vh"
          defaultLanguage="json"
          onChange={handleBodyEditorChange}
        />
      </TabItem>
      <TabItem label="Headers" index={1}>
        <HeadersRedactor outerSetHeader={setHeaders} />
      </TabItem>
    </Tabs>
  );
}
