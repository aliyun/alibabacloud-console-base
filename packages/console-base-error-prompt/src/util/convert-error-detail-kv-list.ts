import _forEach from 'lodash/forEach';
import _isFunction from 'lodash/isFunction';
import _snakeCase from 'lodash/snakeCase';

import {
  IErrorPlain,
  IErrorDetailKv,
  IErrorDetailsAuth
} from '../types';
import {
  DETAILED_MODE
} from '../const';
import intl from '../intl';

import parseParams from './parse-params';

function intlAuthUserType(detailsAuth: IErrorDetailsAuth): string | undefined {
  switch (detailsAuth.userType) {
    case 'SubUser':
      return intl('attr:auth_user_type:ram');
    case 'AssumedRoleUser':
      return intl('attr:auth_user_type:sts');
    default:
      return detailsAuth.userType;
  }
}

function intlAuthType(detailsAuth: IErrorDetailsAuth): string | undefined {
  switch (detailsAuth.type) {
    case 'ExplicitDeny':
      return intl('attr:auth_type:explicit');
    case 'ImplicitDeny':
      return intl('attr:auth_type:implicit');
    default:
      return detailsAuth.type;
  }
}

function createAuthUser(detailsAuth: IErrorDetailsAuth): Record<string, string | undefined> | undefined {
  const {
    userType,
    userName,
    userId
  } = detailsAuth;
  
  if (!userType && !userName && !userId) {
    return;
  }
  
  return {
    [intl('attr:auth_user_type')]: intlAuthUserType(detailsAuth),
    [intl('attr:auth_user_name')]: userName,
    [intl('attr:auth_user_id')]: userId
  };
}

/**
 * 把错误对象转成 `{k0, k, v}` 对象数组，保证某些字段的顺序
 */
export default function convertErrorDetailKvList(error: IErrorPlain, detailedMode = DETAILED_MODE): IErrorDetailKv[] {
  const kvList: IErrorDetailKv[] = [];
  
  function pushInfo(v: unknown, k0: string, k: string): void {
    if (!v || _isFunction(v)) {
      return;
    }
    
    kvList.push({
      k0,
      k,
      v
    });
  }
  
  const {
    code,
    requestId,
    name,
    stack,
    details,
    detailsAuth
  } = error;
  
  pushInfo(code, 'code', intl('attr:code'));
  pushInfo(requestId, 'requestId', intl('attr:request_id'));
  
  if (detailsAuth) {
    pushInfo(detailsAuth.action, 'auth.action', intl('attr:auth_action'));
    pushInfo(detailsAuth.resource, 'auth.resource', intl('attr:auth_resource'));
    pushInfo(createAuthUser(detailsAuth), 'auth.user', intl('attr:auth_user'));
    pushInfo(detailsAuth.policyType, 'auth.policy_type', intl('attr:auth_policy_type'));
    pushInfo(intlAuthType(detailsAuth), 'auth.type', intl('attr:auth_type'));
  }
  
  if (detailedMode) {
    // 对 details.params 和 details.body 有良好的展示
    _forEach(details, (v, k) => {
      pushInfo(k === 'params' || k === 'body' ? parseParams(v) : v, `detail.${k}`, _snakeCase(k).toUpperCase());
    });
    
    // 实在没有可用信息的话，很可能是运行时错误，需要给开发一些醍醐灌顶..
    if (!kvList.length) {
      pushInfo(name, 'name', 'NAME');
      pushInfo(stack, 'stack', 'STACK');
    }
  }
  
  return kvList;
}
