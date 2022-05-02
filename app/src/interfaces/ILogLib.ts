export interface ILogLib {
    info: (...args: Array<unknown>) => void;
    warning: (...args: Array<unknown>) => void;
    error: (...args: Array<unknown>) => void;
    debug_info: (...args: Array<unknown>) => void;
    debug_warning: (...args: Array<unknown>) => void;
    debug_error: (...args: Array<unknown>) => void;
}

export interface ILogLibFactory {
    (debug?: string, terminal?: Function): ILogLib;
}