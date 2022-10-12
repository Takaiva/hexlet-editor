import React from 'react';

import Editor from '@monaco-editor/react';

import { useEditor } from './hooks.js';

export const MonacoEditor = () => {
  const {
    code,
    language,
    onChange,
    editorDidMount,
  } = useEditor();

  const options = {
    selectOnLineNumbers: true,
  };

  return (
    <Editor
      defaultLanguage={language}
      theme="vs-dark"
      defaultValue={code}
      options={options}
      onChange={onChange}
    />
  );
}
