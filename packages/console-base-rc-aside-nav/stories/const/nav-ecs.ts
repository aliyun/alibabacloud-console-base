import {
  AsideNavProps
} from '../../src';

export const NAV: AsideNavProps = {
  title: '云服务器 ECS',
  items: [{
    key: 'overview',
    label: '概览',
    href: '#/home'
  }, {
    key: 'events',
    label: '事件',
    href: '#/events'
  }, {
    key: 'tags',
    label: '标签',
    href: '#/tags'
  }, {
    key: 'diagnosis',
    label: '自助问题排查',
    href: '#/diagnosis'
  }, {
    key: 'app',
    label: '应用管理',
    href: '#/app'
  }, '-', {
    key: 'my_frequent',
    label: '我的常用',
    subItems: [{
      key: 'server',
      label: '实例',
      href: '#/server/:regionId'
    }, {
      key: 'image',
      label: '镜像',
      href: '#/image/:regionId'
    }, {
      key: 'disk',
      label: '云盘',
      href: '#/disk'
    }, {
      key: 'eip',
      label: '弹性网卡',
      href: '#/eip/:regionId'
    }, {
      key: 'saving',
      label: '节省计划',
      href: '#/saving'
    }]
  }, '-', {
    key: 'ins_img',
    label: '实例与镜像',
    subItems: [{
      key: 'server',
      label: '实例',
      href: '#/server/:regionId'
    }, {
      key: 'image',
      label: '镜像',
      href: '#/image/:regionId'
    }]
  }, '-', {
    key: 'net_seq',
    label: '网络与安全',
    subItems: [{
      key: 'sec_group',
      label: '安全组',
      href: '#/securityGroup/:regionId'
    }, {
      key: 'net_int',
      label: '弹性网卡',
      href: '#/networkInterfaces/:regionId'
    }, {
      key: 'key_pair',
      label: '密钥对',
      href: '#/keyPair/:regionId'
    }]
  }, '-', {
    key: 'storage_snapshot',
    label: '存储与快照',
    subItems: [{
      key: 'disk',
      label: '云盘',
      href: '#/disk'
    }, {
      key: 'snapshot',
      label: '快照',
      href: '#/snapshot'
    }]
  }, '-', {
    key: 'deploy',
    label: '部署与弹性',
    subItems: [{
      key: 'ess',
      label: '弹性伸缩',
      href: '//essnew.console.aliyun.com'
    }, {
      key: 'saving',
      label: '节省计划',
      href: '#/saving'
    }]
  }, '-', {
    key: 'devops',
    label: '运维与监控',
    subItems: [{
      key: 'assistant',
      label: '发送命令/文件（云助手）',
      href: '#/cloudAssistant'
    }, {
      key: 'oos',
      label: '运维编排 OOS',
      href: '//oos.console.aliyun.com'
    }, {
      key: 'diagnostic',
      label: '自助问题排查',
      href: '#/diagnostic'
    }]
  }, '-', {
    key: 'recommend',
    label: '常用服务推荐',
    href: '#/product/recommend'
  }]
};

export default NAV;