import { Injectable } from '@nestjs/common';
import * as vm from 'node:vm';

@Injectable()
export class AppService {
  // eslint-disable-next-line class-methods-use-this
  run(code: string): string {
    const internalLogs = [];

    const context = {
      console: {
        log: (value) => {
          internalLogs.push(value);
        },
      },
    };
    vm.createContext(context);

    try {
      const script = new vm.Script(code);

      // run the script
      script.runInContext(context, {
        lineOffset: 0,
        displayErrors: true,
      });

      return internalLogs.join('\n').toString();
    } catch (err) {
      const lineOfError = err.stack
        .split('evalmachine.<anonymous>:')[1]
        .substring(0, 1);
      const errorMsg = `${err.message} at line ${lineOfError}`;
      return errorMsg;
    }
  }
}
