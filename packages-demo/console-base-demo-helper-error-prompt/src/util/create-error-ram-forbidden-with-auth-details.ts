import {
  CODE_FORBIDDEN_RAM
} from '../const';

import createError from './create-error';

export default function createErrorRamForbiddenWithAuthDetails(): Error | Record<string, unknown> {
  return createError({
    code: CODE_FORBIDDEN_RAM,
    message: '未授权 - 带详情（官方，由组件标准化）',
    responseData: { // 模拟 FetcherError 带 accessDeniedDetail 的场景
      accessDeniedDetail: {
        NoPermissionType: 'ImplicitDeny',
        AuthAction: 'ram:ListUsers',
        AuthResource: 'acs:ram:*:1xxxxxxx:user/*',
        AuthPrincipalType: 'SubUser',
        AuthPrincipalOwnerId: '1xxxxx',
        AuthPrincipalDisplayName: '2xxxxxxxxxxxxx',
        PolicyType: 'ResourceGroupLevelIdentityBassdPolicy'
      }
    }
  });
}