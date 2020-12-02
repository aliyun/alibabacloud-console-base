import { FetcherConfig, FetcherFnRequest } from '@alicloud/fetcher';
import { IRiskConfig, IRiskInfo } from '../../../types';
interface IParams {
    request: FetcherFnRequest;
    fetcherConfig: FetcherConfig;
    riskInfo: IRiskInfo;
    riskConfig: IRiskConfig;
}
declare const _default: ({ request, fetcherConfig, riskInfo, riskConfig }: IParams) => Promise<unknown>;
/**
 * 风控 - 二次验证（SMS + EMAIL + MFA）
 */
export default _default;
