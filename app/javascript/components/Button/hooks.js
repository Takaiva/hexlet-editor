import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { actions } from '../../slices/index.js';

const { runCode } = actions;

export const useButton = () => {
  const dispatch = useDispatch();
  const { codeExecutionState, code } = useSelector(({ terminal, editor }) => ({
    codeExecutionState: terminal.codeExecutionState,
    code: editor.code,
  }));
  const onClick = useCallback(
    () => dispatch(runCode(code)),
    [dispatch, runCode, code],
  );
  const onSave = async () => {
    const data = axios.post('/snippets', {
      code,
    });
    return data;
  };
  const disabled = codeExecutionState === 'executing';

  return {
    onClick,
    onSave,
    disabled,
    code,
  };
};
