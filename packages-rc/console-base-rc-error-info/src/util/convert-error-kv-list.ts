import {
  isFunction as _isFunction,
  forEach as _forEach,
  snakeCase as _snakeCase
} from 'lodash-es';

import {
  IErrorPlain,
  IErrorDetailKv, IErrorInfoDisplayOptions
} from '../types';
import intl from '../intl';

import parseParams from './parse-params';
import intlAuthType from './intl-auth-type';
import getAuthUserDisplayInfo from './get-auth-user-display-info';

/**
 * 把错误对象转成 `{k0, k, v}` 对象数组，保证某些字段的顺序
 */
export default function convertErrorKvList(error: IErrorPlain, options: IErrorInfoDisplayOptions): IErrorDetailKv[] {
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
    message,
    requestId,
    name,
    stack,
    details,
    detailsAuth
  } = error;
  
  pushInfo(code, 'code', intl('attr:code'));
  
  if (options.messageShouldShow) {
    pushInfo(message, 'message', intl('attr:message'));
  }
  
  pushInfo(requestId, 'requestId', intl('attr:request_id'));
  
  if (detailsAuth) {
    pushInfo(detailsAuth.action, 'auth.action', intl('attr:auth_action'));
    pushInfo(detailsAuth.resource, 'auth.resource', intl('attr:auth_resource'));
    pushInfo(getAuthUserDisplayInfo(detailsAuth), 'auth.user', intl('attr:auth_user'));
    pushInfo(detailsAuth.policyType, 'auth.policy_type', intl('attr:auth_policy_type'));
    pushInfo(intlAuthType(detailsAuth), 'auth.type', intl('attr:auth_type'));
  }
  
  if (options.detailedMode) {
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
