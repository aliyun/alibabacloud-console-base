import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinTextError,
  mixinTextSuccess,
  mixinTextInfo,
  mixinBgErrorTint,
  mixinBgInfoTint,
  mixinBgSuccessTint
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';

import {
  EIconType
} from '../../../../const';

interface IIconProps {
  iconType: EIconType;
}
interface IProps {
  iconType: EIconType;
  message: string;
}

const CssDivCommon = css`
  width: 90%;
  padding: 8px 12px;
  margin-bottom: 12px;
`;

const ScU2fError = styled.div`
  ${CssDivCommon}
  ${mixinBgErrorTint}
  ${mixinTextError}
`;

const ScU2FNotice = styled.div`
   ${CssDivCommon}
   ${mixinBgInfoTint}
   ${mixinTextInfo}
`;

const ScU2fSuccess = styled.div`
  ${CssDivCommon}
  ${mixinBgSuccessTint}
  ${mixinTextSuccess}
`;

const ScIcon = styled(Icon)<IIconProps>`
  ${props => {
    switch (props.iconType) {
      case EIconType.error:
        return mixinTextError;
      case EIconType.success:
        return mixinTextSuccess;
      default:
        return mixinTextInfo;
    }
  }};
  margin-right: 6px;
`;

export default function U2FMessage({
  iconType,
  message
}: IProps): JSX.Element {
  switch (iconType) {
    case EIconType.error:
      return <ScU2fError>
        <ScIcon type={EIconType.error} iconType={EIconType.error} />
        {message}
      </ScU2fError>;
    case EIconType.notice:
      return <ScU2FNotice>
        <ScIcon type={EIconType.notice} iconType={EIconType.notice} />
        {message}
      </ScU2FNotice>;
    // EIconType.success
    default:
      return <ScU2fSuccess>
        <ScIcon type={EIconType.success} iconType={EIconType.success} />
        {message}
      </ScU2fSuccess>;
  }
}
