import {
  PublicKeyCredentialRequestOptionsJSON
} from '@simplewebauthn/typescript-types';

import {
  DataGetU2fInfoToAuth,
  DataGetU2fWebAuthnInfoToAuth
} from '@alicloud/console-fetcher-risk-data';

import {
  BUILT_IN_RISK_CONFIG
} from '../../const';

const {
  u2fTimeOut,
  webAuthnKeyType
} = BUILT_IN_RISK_CONFIG;

// 获取验证 U2F 的 WebAuthn 信息
export default function getAuthWebAuthnAuthPublicKey(u2fInfo: DataGetU2fInfoToAuth | DataGetU2fWebAuthnInfoToAuth): PublicKeyCredentialRequestOptionsJSON {
  if (u2fInfo.u2FVersion === 'U2F_V2') {
    return {
      timeout: u2fTimeOut,
      challenge: u2fInfo.u2FChallenge,
      allowCredentials: [{
        type: webAuthnKeyType,
        id: u2fInfo.u2FKeyHandle,
        transports: ['usb']
      }],
      extensions: {
        appid: u2fInfo.u2FAppId
      }
    };
  }

  return {
    timeout: u2fTimeOut,
    challenge: u2fInfo.u2FChallenge,
    allowCredentials: [{
      type: webAuthnKeyType,
      id: u2fInfo.credentialId,
      transports: ['usb']
    }],
    rpId: u2fInfo.rpId
  };
}