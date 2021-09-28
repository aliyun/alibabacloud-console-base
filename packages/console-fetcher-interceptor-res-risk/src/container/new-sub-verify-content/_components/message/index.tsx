import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinTextError,
  mixinTextSuccess,
  mixinTextInfo,
  mixinTextPrimary,
  mixinTextWarning,
  mixinBgErrorTint,
  mixinBgInfoTint,
  mixinBgSuccessTint,
  mixinBgWarningTint
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
  noBg?: boolean;
}

interface IErrorProps {
  noBg?: boolean;
}

const CssDivCommon = css`
  padding: 8px 12px;
  margin-bottom: 16px;
`;

const CssDivTip = css`
  margin-left: 4px;
  margin-bottom: 8px;
`;

const ScError = styled.div<IErrorProps>`
  ${props => {
    if (props.noBg) {
      return '';
    }

    return mixinBgErrorTint;
  }}
  ${props => {
    if (props.noBg) {
      return CssDivTip;
    }

    return CssDivCommon;
  }}
  ${mixinTextError}
`;

const ScNotice = styled.div`
   ${CssDivCommon}
   ${mixinBgInfoTint}
   ${mixinTextInfo}
`;

const ScSuccess = styled.div`
  ${CssDivCommon}
  ${mixinBgSuccessTint}
  ${mixinTextSuccess}
`;

const ScWarning = styled.div`
  ${CssDivCommon}
  ${mixinBgWarningTint}
  ${mixinTextPrimary}
`;

const ScIcon = styled(Icon)<IIconProps>`
  ${props => {
    switch (props.iconType) {
      case EIconType.error:
        return mixinTextError;
      case EIconType.success:
        return mixinTextSuccess;
      case EIconType.warning:
        return mixinTextWarning;
      default:
        return mixinTextInfo;
    }
  }};
  margin-right: 6px;
`;

export default function Message({
  iconType,
  noBg = false,
  message
}: IProps): JSX.Element {
  switch (iconType) {
    case EIconType.error:
      return <ScError noBg={noBg}>
        <ScIcon type={EIconType.error} iconType={EIconType.error} />
        {message}
      </ScError>;
    case EIconType.notice:
      return <ScNotice>
        <ScIcon type={EIconType.notice} iconType={EIconType.notice} />
        {message}
      </ScNotice>;
    case EIconType.success:
      return <ScSuccess>
        <ScIcon type={EIconType.success} iconType={EIconType.success} />
        {message}
      </ScSuccess>;
    default:
      return <ScWarning>
        <ScIcon type={EIconType.warning} iconType={EIconType.warning} />
        {message}
      </ScWarning>;
  }
}
