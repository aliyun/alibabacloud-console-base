import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import ToolTip, {
  TooltipPlacement
} from '@alicloud/console-base-rc-tooltip';
import Icon from '@alicloud/console-base-rc-icon';

import {
  IDialogData
} from '../../types';
import intl from '../../intl';
import {
  intlVerifyDialogTitle
} from '../../utils';

interface IProps {
  dialogData: IDialogData;
}

const ScIconDiv = styled.div`
  display: inline-block;
  margin-left: 4px;
  font-size: 12px;
`;

const ScToolTip = styled(ToolTip)`
  margin-left: -8px;
  max-width: 320px;
  white-space: normal;
`;

export default function DialogTitle({
  dialogData
}: IProps): JSX.Element {
  const [stateToolTipVisible, setStateToolTipVisible] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    setStateToolTipVisible(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setStateToolTipVisible(false);
  }, []);

  const {
    dialogType,
    subBindMfaStep,
    subGetVerificationToAuthData,
    currentSubVerificationDeviceType
  } = dialogData;
  const subValidatorsLength = subGetVerificationToAuthData?.verificationOrBindValidators.length ?? 0;

  // 如果子账号风控方式 > 1，那么需要展示 ToolTip 提示请任选一种方式完成安全验证
  if (subValidatorsLength > 1) {
    return <div>
      {intl('title:default')}
      <ScIconDiv>
        <Icon {...{
          type: 'help-circle',
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave
        }}>
          <ScToolTip {...{
            visible: stateToolTipVisible,
            placement: TooltipPlacement.BOTTOM_LEFT,
            content: intl('message:multi:validators')
          }} />
        </Icon>
      </ScIconDiv>
      
    </div>;
  }

  return <>
    {intlVerifyDialogTitle({
      dialogType,
      subBindMfaStep,
      currentSubVerificationDeviceType
    })}
  </>;
}