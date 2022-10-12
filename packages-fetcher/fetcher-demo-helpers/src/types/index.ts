export interface IUaOpt {
  LogVal: string;
  Token: string;
  MaxMCLog: number;
  MaxKSLog: number;
  MaxMPLog: number;
  MPInterval: number;
  MaxTCLog: number;
  MaxFocusLog: number;
  SendMethod: number;
  isSendError: number;
  Flag: number;
}

export interface IWin {
  UA_Opt?: IUaOpt;
  ALIYUN_CONSOLE_CONFIG?: {
    SEC_TOKEN?: string;
  };
  collina_by_boshit?: string;
}

export interface IDemoConfig {
  url?: string;
  method?: string;
  timeout?: number;
}

export interface IDemoFnFetchRequest {
  (config: IDemoConfig): Promise<unknown>;
}

export interface IDemoHelperFetcher {
  request: IDemoFnFetchRequest;
}
