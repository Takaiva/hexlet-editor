import React, { useEffect, useRef } from 'react';
import { XTerm } from 'xterm-for-react';
import 'xterm/css/xterm.css';

import { useTerminal } from './hooks.js';

const runTerminal = (xterm, output) => {
  const term = xterm.terminal;
  const shellprompt = '$ ';

  term.write(`\r\n${shellprompt}${output}`);
};


export const Terminal = () => {
  const xTermRef = useRef(null);
  const { output } = useTerminal();

  useEffect(() => {
    runTerminal(xTermRef.current, output);
    // return () => xTermRef.current?.componentWillUnmount();
  }, [output]);

  return <XTerm ref={xTermRef} />;
};
