import {
  RegisterRequest,
  SignRequest,
  RegisterResponse,
  SignResponse,
  RegisteredKey,
  OrError
} from '../types';

import makeError from './make-error';
import {
  chromeApi
} from './google-u2f-api';

// Feature detection (yes really)
// For IE and Edge detection, see https://stackoverflow.com/questions/31757852#31757969
// and https://stackoverflow.com/questions/56360225#56361977
const isBrowser = (typeof navigator !== 'undefined') && !!navigator.userAgent;
const isSafari = isBrowser
    && navigator.userAgent.match(/Safari\//)
    && !navigator.userAgent.match(/Chrome\//);
const isSupportedSafari = isBrowser
    && navigator.userAgent.match(/Safari\/(1[3456789])/)
    && !navigator.userAgent.match(/Chrome\//);
const isEDGE = isBrowser && /(Edge\/)|(edg\/)/i.test(navigator.userAgent);
const isIE = isBrowser && /(MSIE 9|MSIE 10|rv:11.0)/i.test(navigator.userAgent);

interface API {
  u2f: any;
}

let _backend: Promise<API> | null = null;

function getBackend() {
  if (_backend) {
    return _backend;
  }
  
  const supportChecker = new Promise<API>(resolve => {
    function notSupported() {
      resolve({
        u2f: null
      });
    }
  
    if (!isBrowser) {
      return notSupported();
    }
    
    // Safari doesn't support U2F, and the Safari-FIDO-U2F
    // extension lacks full support (Multi-facet apps), so we
    // block it until proper support.
    if (isSafari && !isSupportedSafari) {
      return notSupported();
    }
    
    const hasNativeSupport = (typeof (window as any).u2f !== 'undefined') && (typeof (window as any).u2f.sign === 'function');
    
    if (hasNativeSupport) {
      return resolve({
        u2f: (window as any).u2f
      });
    }
    
    // We don't want to check for Google's extension hack on IE
    // as it'll cause trouble (popups, etc)
    if (isIE) {
      return notSupported();
    }
    
    if (isEDGE) {
      const edgePart = navigator.userAgent.match(/(Edge\/)|(edg\/)([0-9]+)\./i);
      const version = (edgePart ? parseInt(edgePart[3], 10) : false);
      
      // console.log(`version`, version, typeof version)
      if (version < 79) {
        return notSupported();
      }
    }
    
    // U2F isn't supported over http, only https
    if (location.protocol === 'http:') {
      return notSupported();
    }
  
    // Unsupported browser, the chrome hack would throw
    if (typeof MessageChannel === 'undefined') {
      return notSupported();
    }
    
    // Test for google extension support
    chromeApi.isSupported((ok: any) => {
      if (ok) {
        resolve({
          u2f: chromeApi
        });
      } else {
        // notSupported();
      }
    });
  }).then(response => {
    _backend = response.u2f ? supportChecker : null;
    
    return response;
  });
  
  return supportChecker;
}

function _ensureSupport(backend: API): void {
  if (!backend.u2f) {
    if (location.protocol === 'http:') {
      throw new Error("U2F isn't supported over http, only https");
    }
    
    throw new Error('U2F not supported');
  }
}

function arrayify<T>(value: T | T[] | Readonly<T> | ReadonlyArray<T> | undefined | null): T[] {
  if (value != null && Array.isArray(value)) {
    return value;
  }

  if (value == null) {
    return [];
  }

  if (Array.isArray(value)) {
    return [...value];
  }

  return [value as T];
}

export function register(registerRequests: RegisterRequest | ReadonlyArray<RegisterRequest>, signRequests: SignRequest | ReadonlyArray<SignRequest>, timeout?: number): Promise<RegisterResponse>;
export function register(registerRequests: RegisterRequest | ReadonlyArray<RegisterRequest>, timeout?: number): Promise<RegisterResponse>;
export function register(
    registerRequests: RegisterRequest | ReadonlyArray<RegisterRequest>,
    signRequests?: SignRequest | ReadonlyArray<SignRequest> | number,
    timeout?: number
): Promise<RegisterResponse> {
  const _registerRequests = arrayify(registerRequests);
  
  if (typeof signRequests === 'number' && typeof timeout === 'undefined') {
    timeout = signRequests;
    signRequests = [];
  }
  
  const _signRequests = arrayify(signRequests as SignRequest | ReadonlyArray<SignRequest>);
  
  return getBackend().then(backend => {
    _ensureSupport(backend);
    
    const {
      u2f
    } = backend;
    
    return new Promise<RegisterResponse>((resolve, reject) => {
      function callback(response: OrError<RegisterResponse>) {
        if (response.errorCode) {
          reject(makeError('Registration failed', response));
        } else {
          delete response.errorCode;
          resolve(response);
        }
      }
      
      const {
        appId
      } = _registerRequests[0];
      
      u2f.register(appId, _registerRequests, _signRequests, callback, timeout);
    });
  });
}

export function sign(
    signRequests: SignRequest | ReadonlyArray<SignRequest>,
    timeout?: number
): Promise<SignResponse> {
  const _signRequests = arrayify(signRequests);

  return getBackend().then(backend => {
    _ensureSupport(backend);

    const {
      u2f
    } = backend;
    
    return new Promise<SignResponse>((resolve, reject) => {
      function callback(response: OrError<SignResponse>) {
        if (response.errorCode) {
          reject(makeError('Sign failed', response));
        } else {
          delete response.errorCode;
          resolve(response);
        }
      }
      
      const {
        appId
      } = _signRequests[0];
      const {
        challenge
      } = _signRequests[0];
      const registeredKeys = ([] as Array<RegisteredKey>).concat(..._signRequests.map(({
        version,
        keyHandle,
        appId: registeredAppId
      }) => arrayify(keyHandle).map(arredKeyHandle => ({
        version,
        keyHandle: arredKeyHandle,
        appId: registeredAppId
      } as RegisteredKey))));
      
      u2f.sign(appId, challenge, registeredKeys, callback, timeout);
    });
  });
}

export function isSupported(): Promise<boolean> {
  return getBackend().then(backend => !!backend.u2f);
}

export function ensureSupport(): Promise<void> {
  return getBackend().then(_ensureSupport);
}
