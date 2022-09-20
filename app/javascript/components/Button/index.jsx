import React, { memo } from 'react';
import { useButton } from './hooks';

export const Button = memo(() => {
  const { onClick, disabled, update } = useButton();

  return (
    <div className="text-center">
      <button
        type="button"
        className="btn btn-success btn-lg"
        disabled={disabled}
        onClick={() => {
          onClick();
          update();
        }}
      >
        Run
      </button>
    </div>
  );
});
