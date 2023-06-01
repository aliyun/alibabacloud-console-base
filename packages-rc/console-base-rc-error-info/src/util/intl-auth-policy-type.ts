import {
  IErrorDetailsAuth
} from '../types';
import intl from '../intl';

export default function intlAuthPolicyType(detailsAuth: IErrorDetailsAuth): string | undefined {
  switch (detailsAuth.policyType) {
    case 'ControlPolicy':
      return intl('attr:auth_policy_type:control_policy');
    case 'SessionPolicy':
      return intl('attr:auth_policy_type:session_policy');
    case 'AssumeRolePolicy':
      return intl('attr:auth_policy_type:assume_role_policy');
    case 'AccountLevelIdentityBasedPolicy':
      return intl('attr:auth_policy_type:account_level_identity_based_policy');
    case 'ResourceGroupLevelIdentityBasedPolicy':
      return intl('attr:auth_policy_type:resource_group_level_identity_based_policy');
    default:
      return detailsAuth.type;
  }
}