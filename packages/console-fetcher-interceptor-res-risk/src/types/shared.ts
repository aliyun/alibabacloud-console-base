export interface ITargetUserPrincipalName {
  TargetUserPrincipalName: string; // 用户名
}

export interface IAccountId {
  AccountId: string; // 用户 ID
}

// 风控类型，在绑定 MFA 以及验证 MFA 时需要作为参数使用
export interface IExt {
  Ext: string;
}