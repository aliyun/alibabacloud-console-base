interface ILogInfoBase {
    api: string;
    timeStarted?: number;
    traceId?: string;
}
interface ILogInfoError extends ILogInfoBase {
    code?: string;
    message: string;
}
interface ILogInfoSuccess extends ILogInfoBase {
}
export declare function logError({ api, code, message, timeStarted, traceId }: ILogInfoError): void;
export declare function logSuccess({ api, timeStarted, traceId }: ILogInfoSuccess): void;
export {};
