import React, { memo } from 'react';
import { useButton } from './hooks';

export const Button = memo(() => {
  const { onClick, disabled, onSave } = useButton();

  return (
    <div className="text-center">
      <button
        type="button"
        className="btn btn-success btn-lg"
        disabled={disabled}
        onClick={onClick}
      >
        Run
      </button>
      <button
        type="button"
        className="btn btn-success btn-lg"
        onClick={onSave}
        disabled={disabled}
      >
        Save
      </button>
    </div>
  );
});
