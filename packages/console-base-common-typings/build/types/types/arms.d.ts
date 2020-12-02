export interface IArmsBlConfig {
    imgUrl: 'https://arms-retcode.aliyuncs.com/r.png?';
    pid: string;
    uid: string;
    tag: string;
    environment: 'prod' | 'pre' | 'daily';
    linkType: string;
    page: string;
    pvSample: number;
    release: string;
    region: string | null;
    autoSendPerf: boolean;
    autoSendPv: boolean;
    behavior: boolean;
    ignoreUrlCase: boolean;
    useFmp: boolean;
    sendResource: boolean;
    enableSPA: boolean;
    enableApiCors: boolean;
    enableConsole: boolean;
    enableLinkTrace: boolean;
    disableHook: boolean;
    ignoreApiPath: string | null;
    ignoreUrlPath: string | null;
    sample: number;
    setUsername: unknown;
    startTime: unknown;
    ignore: {
        ignoreUrls?: RegExp[];
        ignoreApis?: RegExp;
        ignoreErrors?: RegExp[];
        ignoreResErrors: RegExp[];
    };
    apiHelper: {
        rule: RegExp;
        target: string;
    };
    urlHelper: {
        rule: RegExp;
        target: string;
    }[];
    parseHash?(url: string): string;
    parseResponse?(o: unknown): {
        msg: string;
        code?: string;
        success: boolean;
    };
}
export interface IArmsBl {
    config?: Partial<IArmsBlConfig>;
    _conf?: IArmsBlConfig;
    api?(url: string, success: boolean, duration: number, code: string, message: string, timeStarted: number, traceId: string): void;
    pipe?: ['api', string, boolean, number, string, string, number, string][];
}
export interface IArmsWindowExtended extends Window {
    __bl?: IArmsBl;
}
