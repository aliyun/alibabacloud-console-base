import {
  AsideNavProps
} from '../../src';

const NAV: AsideNavProps = {
  title: '专有网络 VPC',
  items: [{
    label: '专有网络',
    href: '#/vpc/:regionId/vpcs'
  }, {
    label: '交换机',
    href: '#/vpc/:regionId/switches'
  }, {
    label: '路由表',
    href: '#/vpc/:regionId/route-tables'
  }, '-', {
    label: 'NAT 网关',
    subItems: [{
      label: '公网 NAT 网关',
      href: '#/nat/:regionId/nats'
    }, {
      label: 'VPC NAT 网关',
      href: '#/vpc-nat/:regionId/nats',
      mark: 'new'
    }, {
      label: 'NAT 网关资源包',
      href: '#/nat/cu'
    }]
  }, '-', {
    label: '终端节点',
    href: '#/endpoint/:regionId/endpoints'
  }, {
    label: '终端节点服务',
    href: '#/endpointservice/:regionId/endpointservices'
  }, {
    label: '网络智能服务',
    href: '//nis.console.aliyun.com/diagnosis/pathAnalysis'
  }, {
    label: 'DHCP 选项集',
    href: '#/dhcp/:regionId/dhcps'
  }, '-', {
    label: '公网访问',
    subItems: [{
      label: '弹性公网 IP',
      href: '#/eip/:regionId/eips'
    }, {
      label: 'Anycast 弹性公网 IP',
      href: '#/eip/anycasts'
    }, {
      label: '共享带宽',
      href: '#/cbwp/:regionId/cbwps'
    }, {
      label: '共享流量包',
      href: '#/stp/:regionId/stps'
    }, {
      label: 'IPv6 网关',
      href: '#/ipv6/:regionId/ipv6s'
    }, {
      label: 'IPv6 转换服务',
      href: '//ipv6trans.console.aliyun.com'
    }, {
      label: '公网质量工具箱',
      href: '#/detect'
    }, {
      label: 'IP 地址池',
      href: '#/pools/ap-northeast-1/ip-pools'
    }]
  }, '-', {
    label: '网间互联',
    subItems: [{
      label: 'VPN',
      subItems: [{
        label: 'VPN 网关',
        href: '#/vpn/:regionId/vpns'
      }, {
        label: '用户网关',
        href: '#/vpn/:regionId/vpn-clients'
      }, {
        label: 'IPsec 连接',
        href: '#/vpn/:regionId/vpn-connections'
      }, {
        label: 'SSL 服务端',
        href: '#/sslvpn/:regionId/vpn-servers'
      }, {
        label: 'SSL 客户端',
        href: '#/sslvpn/:regionId/vpn-clients'
      }, {
        label: 'IPsec 服务端',
        href: '#/sslvpn/:regionId/vpn-ipsecs'
      }]
    }, {
      label: '云企业网',
      href: '//cen.console.aliyun.com'
    }, {
      label: '高速通道',
      href: '//expressconnect.console.aliyun.com'
    }, {
      label: '智能接入网关',
      href: '//smartag.console.aliyun.com'
    }]
  }, '-', {
    label: '访问控制',
    subItems: [{
      label: '访问控制',
      href: '#/nacl/:regionId/nacls'
    }, {
      label: '云服务器安全组管理',
      href: '//ecs.console.aliyun.com/#/securityGroup/:regionId'
    }]
  }, '-', {
    label: '运维与监控',
    subItems: [{
      label: '流日志',
      href: '#/flowlog/:regionId/flowlogs'
    }, {
      label: '流量镜像',
      subItems: [{
        label: '筛选条件',
        href: '#/traffic-mirror/:regionId/filters'
      }, {
        label: '镜像会话',
        href: '#/traffic-mirror/:regionId/sessions'
      }]
    }, {
      label: '网络智能服务',
      href: '//nis.console.aliyun.com/diagnosis/pathAnalysis'
    }, {
      label: '配额管理',
      href: '#/quota'
    }, {
      label: '闲置实例',
      href: '#/idle-instance'
    }]
  }, '-', {
    label: '常用服务推荐',
    subItems: [{
      label: '负载均衡 CLB',
      href: '//slb.console.aliyun.com'
    }, {
      label: '云服务器（ECS）',
      href: '//ecs.console.aliyun.com'
    }, {
      label: '云数据传输',
      href: '//cdt.console.aliyun.com'
    }, {
      label: '云防火墙',
      href: '//yundun.console.aliyun.com/?p=cfwnext'
    }, {
      label: '产品帮助文档',
      href: '//help.aliyun.com/product/27706.html'
    }]
  }]
};

export default NAV;