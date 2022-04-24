import {
  AsideNavProps
} from '../../src';

export const NAV: AsideNavProps = {
  title: '云服务器 ECS',
  items: [{
    label: '概览',
    href: '#/home'
  }, {
    label: '事件',
    href: '#/events'
  }, {
    label: '标签',
    href: '#/tags'
  }, {
    label: '自助问题排查',
    href: '#/active_diagnosis'
  }, {
    label: '应用管理',
    href: '#/app'
  }, '-', {
    label: '我的常用',
    subItems: [{
      label: '实例',
      href: '#/server/region'
    }, {
      label: '镜像',
      href: '#/image/region'
    }, {
      label: '云盘',
      href: '#/disk'
    }, {
      label: '弹性网卡',
      href: '#/networkInterfaces/region'
    }, {
      label: '节省计划',
      href: '#/savingPlan'
    }]
  }, '-', {
    label: '实例与镜像',
    subItems: [{
      label: '实例',
      href: '#/server/:regionId'
    }, {
      label: '镜像',
      href: '#/image/:regionId'
    }]
  }, '-', {
    label: '网络与安全',
    subItems: [{
      label: '安全组',
      href: '#/securityGroup/region'
    }, {
      label: '弹性网卡',
      href: '#/networkInterfaces/region'
    }, {
      label: '密钥对',
      href: '#/keyPair/region'
    }]
  }, '-', {
    label: '存储与快照',
    subItems: [{
      label: '云盘',
      href: '#/disk'
    }, {
      label: '快照',
      href: '#/snapshot'
    }]
  }, '-', {
    label: '部署与弹性',
    subItems: [{
      label: '弹性伸缩',
      href: '//essnew.console.aliyun.com'
    }, {
      label: '节省计划',
      href: '#/savingPlan'
    }]
  }, '-', {
    label: '运维与监控',
    subItems: [{
      label: '发送命令/文件（云助手）',
      href: '#/cloudAssistant'
    }, {
      label: '运维编排 OOS',
      href: '//oos.console.aliyun.com'
    }, {
      label: '自助问题排查',
      href: '#/diagnostic'
    }]
  }, '-', {
    label: '常用服务推荐',
    href: '#/product/recommend'
  }]
};

export default NAV;