import { Fetcher } from '@alicloud/fetcher';
import { IRiskConfig as ConsoleFetcherRiskConfig } from './types';
import { ERROR_RISK_FORBIDDEN, ERROR_RISK_INVALID, ERROR_RISK_CANCELLED } from './const';
export default function intercept(fetcher: Fetcher, o?: ConsoleFetcherRiskConfig): () => void;
export { ERROR_RISK_FORBIDDEN, ERROR_RISK_INVALID, ERROR_RISK_CANCELLED };
export type { ConsoleFetcherRiskConfig };
