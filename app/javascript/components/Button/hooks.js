import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { dataId } from '../../slices/editorSlice';

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
<<<<<<< HEAD
  const onSave = async () => {
    const data = axios.post('api/snippets', {
=======
  const update = async () => {
    const response = await axios.put(`/snippets/${await dataId}`, {
>>>>>>> 9fe484d6877a9ad6ce55776288bb5e70002e1e1b
      code,
    });
    return response;
  };
  const disabled = codeExecutionState === 'executing';

  return {
    onClick,
    update,
    disabled,
    code,
  };
};
