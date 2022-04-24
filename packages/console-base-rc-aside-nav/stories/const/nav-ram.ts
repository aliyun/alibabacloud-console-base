import {
  AsideNavProps
} from '../../src';

const NAV: AsideNavProps = {
  title: 'RAM 访问控制',
  items: [{
    label: '概览',
    href: '#/overview',
    selected: true
  }, {
    label: '身份管理',
    subItems: [{
      label: '用户',
      href: '#/user'
    }, {
      label: '用户组',
      href: '#/user-group'
    }, {
      label: '角色',
      href: '#/role'
    }, {
      label: '设置',
      href: '#/settings'
    }]
  }, '-', {
    label: 'SSO 管理',
    href: '#/sso'
  }, '-', {
    label: '权限管理',
    subItems: [{
      label: '授权',
      href: '#/auth'
    }, {
      label: '策略',
      href: '#/policy'
    }]
  }, '-', {
    label: 'OAuth 应用用管理',
    href: '#/oauth',
    mark: 'publicBeta'
  }, {
    label: '多账号权限管理',
    href: '//cloudsso.console.aliyun.com'
  }]
};

export default NAV;