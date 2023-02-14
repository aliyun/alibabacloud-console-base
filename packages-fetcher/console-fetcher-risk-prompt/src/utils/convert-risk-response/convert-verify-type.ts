import {
  IRiskConfig
} from '../../types';
import {
  EVerifyType
} from '../../enum';
import {
  DEFAULT_RISK_CONFIG
} from '../../const';

interface IConvertVerifyTypeProps {
  type0?: string;
  riskConfig?: IRiskConfig;
}

export default function convertVerifyType({
  type0,
  riskConfig
}: IConvertVerifyTypeProps): EVerifyType {
  switch (type0) {
    case riskConfig?.bySms || DEFAULT_RISK_CONFIG.bySms:
      return EVerifyType.SMS;
    case riskConfig?.byEmail || DEFAULT_RISK_CONFIG.byEmail:
      return EVerifyType.EMAIL;
    case riskConfig?.byMfa || DEFAULT_RISK_CONFIG.byMfa:
      return EVerifyType.MFA;
    default:
      return type0 ? EVerifyType.UNKNOWN : EVerifyType.NONE;
  }
}