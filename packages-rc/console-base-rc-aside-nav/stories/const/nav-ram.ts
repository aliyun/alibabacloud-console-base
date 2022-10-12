import {
  AsideNavProps
} from '../../src';

const NAV: AsideNavProps = {
  title: 'RAM 访问控制',
  items: [{
    key: 'overview',
    label: '概览',
    href: '#/overview',
    selected: true
  }, {
    key: 'identity',
    label: '身份管理',
    subItems: [{
      key: 'user',
      label: '用户',
      href: '#/user'
    }, {
      key: 'user-group',
      label: '用户组',
      href: '#/user-group'
    }, {
      key: 'role',
      label: '角色',
      href: '#/role'
    }, {
      key: 'settings',
      label: '设置',
      href: '#/settings'
    }]
  }, '-', {
    key: 'sso',
    label: 'SSO 管理',
    href: '#/sso'
  }, '-', {
    key: 'acl',
    label: '权限管理',
    subItems: [{
      key: 'auth',
      label: '授权',
      href: '#/auth'
    }, {
      key: 'policy',
      label: '策略',
      href: '#/policy'
    }]
  }, '-', {
    key: 'oauth',
    label: 'OAuth 应用用管理',
    href: '#/oauth',
    mark: 'beta-public'
  }, {
    key: 'cloud_sso',
    label: '多账号权限管理',
    href: '//cloudsso.console.aliyun.com'
  }]
};

export default NAV;