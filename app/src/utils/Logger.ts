import { ILogLib, ILogLibFactory } from '../interfaces/ILogLib'

export const logger: ILogLibFactory = (debug: string = "false", terminal: Function = console.log): ILogLib => {
    const log = (...args: Array<unknown>) => {
        terminal(...args);
    }
    const debug_log = (...args: Array<unknown>) => {
        if(debug === "true") {
            terminal(...args);
        }
    }

    return {
        info: (...args: Array<unknown>) => {
            log('INFO::', ...args);
        },
        warning: (...args: Array<unknown>) => {
            log('WARNING::', ...args);
        },
        error: (...args: Array<unknown>) => {
            log('ERROR::', ...args);
        },
        debug_info: (...args: Array<unknown>) => {
            debug_log('INFO::', ...args);
        },
        debug_warning: (...args: Array<unknown>) => {
            debug_log('WARNING::', ...args);
        },
        debug_error: (...args: Array<unknown>) => {
            debug_log('ERROR::', ...args);
        },
    }
}