export interface IDemoConfig {
  url?: string;
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH' | 'JSONP';
  timeout?: number;
}

export interface IDemoFnFetchRequest {
  (config: IDemoConfig): Promise<unknown>;
}

export interface IDemoHelperFetcher {
  request: IDemoFnFetchRequest;
}
