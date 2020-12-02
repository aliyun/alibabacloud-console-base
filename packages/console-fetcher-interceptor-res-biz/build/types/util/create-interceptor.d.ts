import { FetcherFnInterceptResponseFulfilled } from '@alicloud/fetcher';
import { IFetcherConfigExtendedBiz } from '../types';
/**
 * 请求到这里，说明服务端有返回，但业务上不一定是成功的。
 * 这里会判断业务是否成功，如果成功则返回从原屎返回中得出的真正的数据，如果失败在抛出 FetchErrorBiz。
 */
export default function createInterceptor(): FetcherFnInterceptResponseFulfilled<IFetcherConfigExtendedBiz>;
