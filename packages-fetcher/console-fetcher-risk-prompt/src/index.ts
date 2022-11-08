export { default } from './risk-prompt';
export {
  DEFAULT_DIALOG_SIZE,
  ERROR_RISK_FORBIDDEN,
  ERROR_RISK_INVALID,
  ERROR_RISK_CANCELLED
} from './const';
export {
  convertMpkSetting,
  getMergedUseNewRisk
} from './utils';
export type {
  TRiskInfo as RiskInfo,
  IRiskResponse as RiskResponse,
  IMpkRiskInfo as MpkRiskInfo,
  INewSubRiskInfo as NewSubRiskInfo,
  INewMainRiskInfo as NewMainRiskInfo,
  IOldMainRiskInfo as OldMainRiskInfo
} from './types';