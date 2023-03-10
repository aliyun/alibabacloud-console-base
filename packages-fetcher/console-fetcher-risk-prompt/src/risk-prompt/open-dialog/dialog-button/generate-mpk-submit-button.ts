import {
  DialogButtonProps
} from '@alicloud/console-base-rc-dialog';

import {
  IDialogData,
  IRiskPromptResolveData
} from '../../../types';
import {
  ERiskType
} from '../../../enum';
import intl from '../../../intl';
import {
  handleRiskPromptDialogSubmit
} from '../../../utils';

interface IGenerateMpkSubmitButtonProps {
  codeType: string;
  accountId: string;
  verifyType: string;
  primaryButtonDisabled?: boolean;
}

export default function generateMpkSubmitButton({
  codeType,
  accountId,
  verifyType,
  primaryButtonDisabled
}: IGenerateMpkSubmitButtonProps): DialogButtonProps<IRiskPromptResolveData, IDialogData> {
  return {
    label: intl('op:confirm'),
    disabled: Boolean(primaryButtonDisabled),
    onClick(contentContext) {
      handleRiskPromptDialogSubmit({
        codeType,
        accountId,
        verifyType,
        contentContext,
        dialogSubmitType: ERiskType.MPK
      });

      return false;
    }
  };
}