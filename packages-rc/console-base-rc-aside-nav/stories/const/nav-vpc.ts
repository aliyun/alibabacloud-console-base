import {
  AsideNavProps
} from '../../src';

const NAV: AsideNavProps = {
  title: '专有网络 VPC',
  defaultUnfolded: 'first-level',
  items: [{
    key: 'vpc',
    label: '专有网络',
    href: '#/vpc/:regionId/vpc'
  }, {
    key: 'switch',
    label: '交换机',
    href: '#/vpc/:regionId/switch'
  }, {
    key: 'route',
    label: '路由表',
    href: '#/vpc/:regionId/route'
  }, '-', {
    key: 'nat',
    label: 'NAT 网关',
    subItems: [{
      key: 'nat',
      label: '公网 NAT 网关',
      href: '#/nat/:regionId'
    }, {
      key: 'vpc_nat',
      label: 'VPC NAT 网关',
      href: '#/vpc-nat/:regionId',
      mark: 'new'
    }, {
      key: 'nat_cu',
      label: 'NAT 网关资源包',
      href: '#/nat/cu'
    }]
  }, '-', {
    key: 'endpoint',
    label: '终端节点',
    href: '#/endpoint/:regionId/endpoint'
  }, {
    key: 'endpoint_svc',
    label: '终端节点服务',
    href: '#/endpoint_svc/:regionId'
  }, {
    key: 'nis',
    label: '网络智能服务',
    href: '//nis.console.aliyun.com/diagnosis/pathAnalysis'
  }, {
    key: 'dhcp',
    label: 'DHCP 选项集',
    href: '#/dhcp/:regionId'
  }, '-', {
    key: 'pub_access',
    label: '公网访问',
    subItems: [{
      key: 'eip',
      label: '弹性公网 IP',
      href: '#/eip/:regionId'
    }, {
      key: 'eip_anycasts',
      label: 'Anycast 弹性公网 IP',
      href: '#/eip/anycasts'
    }, {
      key: 'cbwp',
      label: '共享带宽',
      href: '#/cbwp/:regionId'
    }, {
      key: 'stp',
      label: '共享流量包',
      href: '#/stp/:regionId'
    }, {
      key: 'ipv6',
      label: 'IPv6 网关',
      href: '#/ipv6/:regionId'
    }, {
      key: 'ipv6trans',
      label: 'IPv6 转换服务',
      href: '//ipv6trans.console.aliyun.com'
    }, {
      key: 'detect',
      label: '公网质量工具箱',
      href: '#/detect'
    }, {
      key: 'pools',
      label: 'IP 地址池',
      href: '#/pools/:regionId'
    }]
  }, '-', {
    key: 'intranet',
    label: '网间互联',
    subItems: [{
      key: 'vpn',
      label: 'VPN',
      subItems: [{
        key: 'vpn',
        label: 'VPN 网关',
        href: '#/vpn/:regionId'
      }, {
        key: 'vpn-clients',
        label: '用户网关',
        href: '#/vpn/:regionId/vpn-clients'
      }, {
        key: 'vpn-connections',
        label: 'IPsec 连接',
        href: '#/vpn/:regionId/vpn-connections'
      }, {
        key: 'sslvpn',
        label: 'SSL 服务端',
        href: '#/sslvpn/:regionId/vpn-servers'
      }, {
        key: 'sslvpn_clients',
        label: 'SSL 客户端',
        href: '#/sslvpn/:regionId/vpn-clients'
      }, {
        key: 'sslvpn_vpn-ipsecs',
        label: 'IPsec 服务端',
        href: '#/sslvpn/:regionId/vpn-ipsecs'
      }]
    }, {
      key: 'cen',
      label: '云企业网',
      href: '//cen.console.aliyun.com'
    }, {
      key: 'express',
      label: '高速通道',
      href: '//expressconnect.console.aliyun.com'
    }, {
      key: 'smartag',
      label: '智能接入网关',
      href: '//smartag.console.aliyun.com'
    }]
  }, '-', {
    key: 'acl',
    label: '访问控制',
    subItems: [{
      key: 'nacl',
      label: '访问控制',
      href: '#/nacl/:regionId'
    }, {
      key: 'ecs',
      label: '云服务器安全组管理',
      href: '//ecs.console.aliyun.com/#/securityGroup/:regionId'
    }]
  }, '-', {
    key: 'operate_monitor',
    label: '运维与监控',
    subItems: [{
      key: 'flowlog',
      label: '流日志',
      href: '#/flowlog/:regionId'
    }, {
      key: 'traffic-mirror',
      label: '流量镜像',
      subItems: [{
        key: 'filter',
        label: '筛选条件',
        href: '#/traffic-mirror/:regionId/filter'
      }, {
        key: 'session',
        label: '镜像会话',
        href: '#/traffic-mirror/:regionId/session'
      }]
    }, {
      key: 'nis',
      label: '网络智能服务',
      href: '//nis.console.aliyun.com/diagnosis/pathAnalysis'
    }, {
      key: 'quota',
      label: '配额管理',
      href: '#/quota'
    }, {
      key: 'idle-instance',
      label: '闲置实例',
      href: '#/idle-instance'
    }]
  }, '-', {
    key: 'commend',
    label: '常用服务推荐',
    defaultUnfolded: false,
    subItems: [{
      key: 'slb',
      label: '负载均衡 CLB',
      href: '//slb.console.aliyun.com'
    }, {
      key: 'ecs',
      label: '云服务器（ECS）',
      href: '//ecs.console.aliyun.com'
    }, {
      key: 'cdt.',
      label: '云数据传输',
      href: '//cdt.console.aliyun.com'
    }, {
      key: 'cfw',
      label: '云防火墙',
      href: '//yundun.console.aliyun.com/?p=cfwnext'
    }, {
      key: 'help',
      label: '产品帮助文档',
      href: '//help.aliyun.com/product/27706.html'
    }]
  }]
};

export default NAV;
