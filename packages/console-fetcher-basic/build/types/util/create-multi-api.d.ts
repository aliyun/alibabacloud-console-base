import { FetcherFnPost } from '@alicloud/fetcher';
import { IFnConsoleApiMulti } from '../types';
import { ETypeApiMulti } from '../const';
/**
 * OpenAPI 多 action 并发调用
 *
 * 仅支持「单产品单地域」的多 action 调用，不同产品不通过地域的 endpoint 不同，并发调用没办法复用 HTTP 层连接，没有太大的加速效果，
 * 这种情况直接通过前端 `Promise.all`。
 */
export default function createMultiApi(fetcherPost: FetcherFnPost, type: ETypeApiMulti): IFnConsoleApiMulti;
