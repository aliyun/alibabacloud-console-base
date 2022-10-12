import {
  ETypeApi
} from '../enum';

export const API_URL_MAP: Record<ETypeApi, string> = {
  [ETypeApi.OPEN]: '/data/api.json',
  [ETypeApi.INNER]: '/data/innerApi.json',
  [ETypeApi.CONTAINER]: '/data/call.json',
  [ETypeApi.OPEN_MULTI]: '/data/multiApi.json'
};

export const MULTI_TYPES = [
  ETypeApi.OPEN_MULTI
];

/**
 * 自动 multi 的延时时间
 */
export const AUTO_MULTI_DELAY = 20;
