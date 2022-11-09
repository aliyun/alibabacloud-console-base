import {
  IRiskConfig
} from '../../types';
import {
  EVerifyType
} from '../../const';

interface IConvertVerifyTypeProps {
  type0?: string;
  riskConfig: Required<IRiskConfig>;
}

export default function convertVerifyType({
  type0,
  riskConfig
}: IConvertVerifyTypeProps): EVerifyType {
  switch (type0) {
    case riskConfig.bySms:
      return EVerifyType.SMS;
    case riskConfig.byEmail:
      return EVerifyType.EMAIL;
    case riskConfig.byMfa: // MFA 既不需要 info
      return EVerifyType.MFA;
    default:
      return type0 ? EVerifyType.UNKNOWN : EVerifyType.NONE;
  }
}