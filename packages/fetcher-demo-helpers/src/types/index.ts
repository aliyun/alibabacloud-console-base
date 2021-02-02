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
