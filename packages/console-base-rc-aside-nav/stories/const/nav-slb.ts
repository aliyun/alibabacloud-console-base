import {
  AsideNavProps
} from '../../src';

const NAV: AsideNavProps = {
  title: '负载均衡 SLB',
  items: [{
    label: '概览',
    href: '#/slb/overview'
  }, {
    label: '应用型负载均衡 ALB',
    subItems: [{
      label: '实例',
      href: '#/alb/:regionId/albs'
    }, {
      label: '服务器组',
      href: '#/alb/:regionId/server-groups'
    }, {
      label: '健康检查',
      href: '#/alb/:regionId/health-check-templates'
    }, {
      label: '访问控制',
      href: '#/alb/:regionId/acls'
    }, {
      label: 'TLS 安全策略',
      href: '#/alb/:regionId/tls'
    }, {
      label: 'ALB 资源包',
      href: '#/alb/cu'
    }]
  }, {
    label: '传统型负载均衡 CLB（原 SLB）',
    subItems: [{
      label: '实例管理',
      href: '#/slb/:regionId/slbs'
    }, {
      label: '回收站',
      href: '#/slb/:regionId/recyclers'
    }, {
      label: '证书管理',
      href: '#/slb/:regionId/certs'
    }, {
      label: '访问控制',
      href: '#/slb/:regionId/acls'
    }, {
      label: '日志管理',
      subItems: [{
        label: '操作日志',
        href: '#/slb/:regionId/operate-log'
      }, {
        label: '访问日志',
        href: '#/slb/:regionId/access-log'
      }, {
        label: '健康检查日志',
        href: '#/slb/:regionId/health-log'
      }]
    }, {
      label: '闲置实例',
      href: '#/slb/idle-slbs'
    }]
  }, '-', {
    label: '配额管理',
    href: '#/slb/quota'
  }, {
    label: '网络智能服务',
    href: '//nis.console.aliyun.com',
    mark: 'new'
  }, '-', {
    label: '快捷链接',
    subItems: [{
      label: '云服务器',
      href: '//ecs.console.aliyun.com'
    }, {
      label: '专有网络',
      href: '//vpcnext.console.aliyun.com'
    }, {
      label: '云解析',
      href: '//dns.console.aliyun.com'
    }, {
      label: '证书服务 SSL',
      href: '//yundun.console.aliyun.com/?p=cas#/cas/home'
    }, {
      label: '弹性伸缩',
      href: '//essnew.console.aliyun.com'
    }, {
      label: '高速通道',
      href: '//expressconnect.console.aliyun.com'
    }, {
      label: '云企业网',
      href: '//cen.console.aliyun.com'
    }, {
      label: '智能接入网关',
      href: '//smartag.console.aliyun.com'
    }, {
      label: '产品帮助文档',
      href: '//help.aliyun.com/product/27537.html'
    }]
  }]
};

export default NAV;