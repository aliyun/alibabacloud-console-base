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

interface IErrorDivProps {
  noBackground?: boolean;
}

interface IProps extends IErrorDivProps {
  iconType: EIconType;
  message: string;
}

const CssDivCommon = css`
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 16px;
`;

const CssDivTip = css`
  margin-left: 4px;
  margin-bottom: 8px;
`;

const ScError = styled.div<IErrorDivProps>`
  ${props => {
    if (props.noBackground) {
      return CssDivTip;
    }

    return CssDivCommon;
  }}
  ${props => {
    if (props.noBackground) {
      return '';
    }

    return mixinBgErrorTint;
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
  margin-right: 8px;
`;

export default function Message({
  iconType,
  noBackground = false,
  message
}: IProps): JSX.Element {
  switch (iconType) {
    case EIconType.error:
      return <ScError noBackground={noBackground}>
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
