export enum ETypeApi {
  OPEN,
  INNER,
  CONTAINER,
  OPEN_MULTI
}

export const API_URL_MAP: Record<ETypeApi, string> = {
  [ETypeApi.OPEN]: '/data/api.json',
  [ETypeApi.INNER]: '/data/innerApi.json',
  [ETypeApi.CONTAINER]: '/data/call.json',
  [ETypeApi.OPEN_MULTI]: '/data/multiApi.json'
};

export const MULTI_TYPES = [
  ETypeApi.OPEN_MULTI
];
