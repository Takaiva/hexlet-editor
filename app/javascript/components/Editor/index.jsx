import React from 'react';
import MonacoEditor from 'react-monaco-editor';

import { useEditor } from './hooks.js';

export function Editor() {
  const { code, language, onChange, editorDidMount } = useEditor();

  const options = {
    selectOnLineNumbers: true,
  };

  return (
    <MonacoEditor
      height="600"
      language={language}
      theme="vs-dark"
      value={code}
      options={options}
      onChange={onChange}
      editorDidMount={editorDidMount}
    />
  );
}
