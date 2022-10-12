import {
  AsideNavProps
} from '../../src';

const NAV: AsideNavProps = {
  title: '负载均衡 SLB',
  items: [{
    key: 'overview',
    label: '概览',
    href: '#/slb/overview'
  }, {
    key: 'alb',
    label: '应用型负载均衡 ALB',
    subItems: [{
      key: 'alb',
      label: '实例',
      href: '#/alb/:regionId/alb'
    }, {
      key: 'server_groups',
      label: '服务器组',
      href: '#/alb/:regionId/server-groups'
    }, {
      key: 'health',
      label: '健康检查',
      href: '#/alb/:regionId/health'
    }, {
      key: 'acl',
      label: '访问控制',
      href: '#/alb/:regionId/acl'
    }, {
      key: 'tls',
      label: 'TLS 安全策略',
      href: '#/alb/:regionId/tls'
    }, {
      key: 'alb/cu',
      label: 'ALB 资源包',
      href: '#/alb/cu'
    }]
  }, {
    key: 'slb',
    label: '传统型负载均衡 CLB（原 SLB）',
    subItems: [{
      key: 'slb',
      label: '实例管理',
      href: '#/slb/:regionId/slb'
    }, {
      key: 'recycle',
      label: '回收站',
      href: '#/slb/:regionId/recycle'
    }, {
      key: 'cert',
      label: '证书管理',
      href: '#/slb/:regionId/cert'
    }, {
      key: 'acl',
      label: '访问控制',
      href: '#/slb/:regionId/acl'
    }, {
      key: 'log',
      label: '日志管理',
      subItems: [{
        key: 'operate-log',
        label: '操作日志',
        href: '#/slb/:regionId/operate-log'
      }, {
        key: 'access-log',
        label: '访问日志',
        href: '#/slb/:regionId/access-log'
      }, {
        key: 'health-log',
        label: '健康检查日志',
        href: '#/slb/:regionId/health-log'
      }]
    }, {
      key: 'idle-slb',
      label: '闲置实例',
      href: '#/slb/idle-slb'
    }]
  }, '-', {
    key: 'quota',
    label: '配额管理',
    href: '#/slb/quota'
  }, {
    key: 'nis',
    label: '网络智能服务',
    href: '//nis.console.aliyun.com',
    mark: 'new'
  }, '-', {
    key: 'link',
    label: '快捷链接',
    subItems: [{
      key: 'ecs',
      label: '云服务器',
      href: '//ecs.console.aliyun.com'
    }, {
      key: 'vpc',
      label: '专有网络',
      href: '//vpcnext.console.aliyun.com'
    }, {
      key: 'dns',
      label: '云解析',
      href: '//dns.console.aliyun.com'
    }, {
      key: 'ssl',
      label: '证书服务 SSL',
      href: '//yundun.console.aliyun.com/?p=cas#/cas/home'
    }, {
      key: 'ess',
      label: '弹性伸缩',
      href: '//essnew.console.aliyun.com'
    }, {
      key: 'express',
      label: '高速通道',
      href: '//expressconnect.console.aliyun.com'
    }, {
      key: 'ce',
      label: '云企业网',
      href: '//cen.console.aliyun.com'
    }, {
      key: 'smartag',
      label: '智能接入网关',
      href: '//smartag.console.aliyun.com'
    }, {
      key: 'help',
      label: '产品帮助文档',
      href: '//help.aliyun.com/product/27537.html'
    }]
  }]
};

export default NAV;