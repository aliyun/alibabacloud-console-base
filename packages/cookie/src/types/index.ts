export interface ICookieSetOptions {
  domain?: string;
  path?: string;
  days?: number;
}

export interface ICookieDeleteOptions {
  domain?: string;
  path?: string;
  // samesite: 'none'; TODO
  // secure?: boolean;
}
