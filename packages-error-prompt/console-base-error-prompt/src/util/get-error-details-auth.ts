import {
  IErrorDetailsAuth,
  IFetcherErrorMimic
} from '../types';

/**
 * 自动从 FetcherError 提取无权限详细信息（仅支持 FetcherError）
 */
export default function getErrorDetailsAuth(err?: IFetcherErrorMimic): IErrorDetailsAuth | undefined {
  const accessDeniedDetail = err?.responseData?.accessDeniedDetail;
  
  if (!accessDeniedDetail) {
    return;
  }
  
  return {
    type: accessDeniedDetail.NoPermissionType,
    action: accessDeniedDetail.AuthAction,
    resource: accessDeniedDetail.AuthResource,
    userType: accessDeniedDetail.AuthPrincipalType,
    userName: accessDeniedDetail.AuthPrincipalDisplayName,
    userId: accessDeniedDetail.AuthPrincipalOwnerId,
    policyType: accessDeniedDetail.PolicyType,
    diagnosisInfo: accessDeniedDetail.EncodedDiagnosticMessage
  };
}
