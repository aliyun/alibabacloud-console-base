import React from 'react';
import styled, {
  css,
  FlattenSimpleInterpolation
} from 'styled-components';

import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  SVG_URLS,
  MOBILE_SCREE_SIZE,
  ALIYUN_APP_VERSION
} from '../../const';

interface IProps {
  deviceType: ESubVerificationDeviceType;
}

interface IScProps {
  ['data-device-type']: ESubVerificationDeviceType;
}

const CssMfa = css`
  right: -16px;
  bottom: -16px;
`;

const CssSms = css`
  right: -8px;
  bottom: -4px;
`;

const CssEmail = css`
  right: 4px;
  bottom: -8px;
`;

function getDeviceStyle(props: IScProps): FlattenSimpleInterpolation {
  switch (props['data-device-type']) {
    case ESubVerificationDeviceType.SMS:
      return CssSms;
    case ESubVerificationDeviceType.EMAIL:
      return CssEmail;
    default:
      return CssMfa;
  }
}

const ScImg = styled.img<IScProps>`
  position: absolute;
  ${getDeviceStyle}

  @media (max-width: ${MOBILE_SCREE_SIZE}px) {
    display: none;
  }
`;

export default function DeviceIcon({
  deviceType
}: IProps): JSX.Element | null {
  const imgSrc = ((): string => {
    switch (deviceType) {
      case ESubVerificationDeviceType.SMS:
        return SVG_URLS.SMS_ICON;
      case ESubVerificationDeviceType.EMAIL:
        return SVG_URLS.EMAIL_ICON;
      case ESubVerificationDeviceType.U2F:
        return SVG_URLS.U2F_ICON;
      default:
        return SVG_URLS.VMFA_ICON_WHITE;
    }
  })();

  const imgWidth = ((): number => {
    switch (deviceType) {
      case ESubVerificationDeviceType.U2F:
        return 120;
      case ESubVerificationDeviceType.VMFA:
        return 80;
      default:
        return 64;
    }
  })();

  if (ALIYUN_APP_VERSION) {
    return null;
  }

  return <ScImg {...{
    src: imgSrc,
    alt: deviceType,
    width: imgWidth,
    'data-device-type': deviceType
  }} />;
}