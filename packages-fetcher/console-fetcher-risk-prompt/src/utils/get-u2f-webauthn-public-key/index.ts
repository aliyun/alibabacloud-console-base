import type {
  PublicKeyCredentialCreationOptionsJSON,
  PublicKeyCredentialRequestOptionsJSON
} from '@simplewebauthn/typescript-types';

import type {
  DataGetU2fInfoToBind,
  DataGetU2fInfoToAuth,
  DataGetU2fWebAuthnInfoToAuth
} from '@alicloud/console-fetcher-risk-data';

import {
  U2F_TIME_OUT,
  WEBAUTHN_KEY_TYPE
} from '../../const';

export function getAuthWebAuthnAuthPublicKey(u2fInfo: DataGetU2fInfoToAuth | DataGetU2fWebAuthnInfoToAuth): PublicKeyCredentialRequestOptionsJSON {
  if (u2fInfo.u2FVersion === 'U2F_V2') {
    return {
      timeout: U2F_TIME_OUT,
      challenge: u2fInfo.u2FChallenge,
      allowCredentials: [{
        type: WEBAUTHN_KEY_TYPE,
        id: u2fInfo.u2FKeyHandle,
        transports: ['usb']
      }],
      extensions: {
        appid: u2fInfo.u2FAppId
      }
    };
  }

  return {
    timeout: U2F_TIME_OUT,
    challenge: u2fInfo.u2FChallenge,
    allowCredentials: [{
      type: WEBAUTHN_KEY_TYPE,
      id: u2fInfo.credentialId,
      transports: ['usb']
    }],
    rpId: u2fInfo.rpId
  };
}

export function getAuthWebAuthnBindPublicKey(u2fInfo: DataGetU2fInfoToBind): PublicKeyCredentialCreationOptionsJSON {
  return {
    timeout: U2F_TIME_OUT,
    attestation: 'direct',
    excludeCredentials: [],
    challenge: u2fInfo.u2FChallenge,
    pubKeyCredParams: [{
      type: u2fInfo.pubKeyCreType as PublicKeyCredentialType,
      alg: Number(u2fInfo.pubKeyCreAlg)
    }],
    rp: {
      name: u2fInfo.rpId,
      id: u2fInfo.rpId
    },
    user: {
      name: u2fInfo.targetUserPrincipalName,
      displayName: u2fInfo.targetUserPrincipalName,
      id: u2fInfo.userIdEncrypted
    },
    authenticatorSelection: {
      authenticatorAttachment: 'cross-platform'
    }
  };
}