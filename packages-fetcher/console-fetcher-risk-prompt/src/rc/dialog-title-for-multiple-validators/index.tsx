import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import ToolTip, {
  TooltipPlacement
} from '@alicloud/console-base-rc-tooltip';
import Icon from '@alicloud/console-base-rc-icon';

import intl from '../../intl';

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

// 当子账号有多种风控方式可选时，风控弹窗标题会有 ToolTip 提示用户可以任选其一进行验证
export default function DialogTitleForMultipleValidators(): JSX.Element {
  const [stateToolTipVisible, setStateToolTipVisible] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    setStateToolTipVisible(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setStateToolTipVisible(false);
  }, []);

  // 如果子账号风控方式 > 1，那么需要展示 ToolTip 提示请任选一种方式完成安全验证
  return (
    <div>
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
    </div>
  );
}
