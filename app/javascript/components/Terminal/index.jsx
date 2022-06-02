import React, { useEffect, useRef } from 'react';
import XTerm from 'react-xterm';
import 'xterm/css/xterm.css';

import { useTerminal } from './hooks.js';

const runTerminal = (xterm, output) => {
  const term = xterm.getTerminal();
  const shellprompt = '$ ';

  term.write(`\r\n${shellprompt}${output}`);
};

const DEFAULT_TERMINAL_ADDONS = ['fit'];

export const Terminal = () => {
  const xTermRef = useRef(null);
  const { output } = useTerminal();

  useEffect(() => {
    runTerminal(xTermRef.current, output);
    // return () => xTermRef.current?.componentWillUnmount();
  }, [output]);

  return <XTerm ref={xTermRef} addons={DEFAULT_TERMINAL_ADDONS} />;
};
