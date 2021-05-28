import React, {
  useState
} from 'react';
import styled from 'styled-components';

import {
  InputText
} from '@alicloud/demo-rc-elements';

import IconProduct, {
  IconProductType,
  EIconType
} from '../../src';

const ScMessage = styled.span`
  strong {
    &.no-product,
    &.no-type {
      &:after {
        content: '!';
        margin-left: 4px;
        padding: 2px 6px;
        color: #fff;
      }
    }
    
    &.no-product {
      &:after {
        background-color: #f00;
      }
    }
    
    &.no-type {
      &:after {
        background-color: #fc6;
      }
    }
  }
`;

const ScList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 12px 0 0 0;
  padding: 0;
  list-style: none;
  
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding: 10px;
    min-width: 50px;
    height: 66px;
    font-size: 11px;
    text-align: center;
    
    i {
      font-size: 32px;
      color: #333;
    }
    
    &:nth-child(2n) {
      background-color: #eee;
    }
    
    &.no-product,
    &.no-type {
      &:after {
        content: '!';
        position: absolute;
        top: 0;
        right: 0;
        padding: 2px 6px;
        color: #fff;
      }
    }
    
    &.no-product {
      &:after {
        background-color: #f00;
      }
    }
    
    &.no-type {
      &:after {
        background-color: #fc6;
      }
    }
  }
`;

const PRODUCT_MAPPING: Record<string, string> = {
  account: '账号管理',
  ace: '云引擎 ACE',
  acms: '应用配置管理',
  actiontrail: '操作审计',
  adam: '数据库和应用迁移',
  addrp: '地址标准化',
  ads: '云原生数据仓库 ADB MySQL 版',
  advisor: '智能顾问',
  afs: '数据风控（业务安全）',
  ahas: '应用高可用服务',
  aiccs: '智能联络中心',
  airec: '智能推荐',
  alidfs: '文件存储 HDFS',
  alikafka: '消息队列 Kafka 版',
  alimt: '机器翻译',
  amqp: '消息队列 for AMQP',
  antcloudauth: '金融级实人认证',
  antibot: '爬虫风险管理',
  apigateway: 'API 网关',
  aqs: '云安全中心（安骑士）',
  arms: '应用实时监控服务',
  ask: 'Serverless 容器服务 ASK',
  assettech: '云行情',
  avds: '漏洞扫描（应用安全）',
  baas: '区块链服务',
  bastion: '堡垒机（安全管理）',
  batchcompute: '批量计算',
  beebot: '云小蜜',
  billing: '费用中心',
  bpstudio: '云架构设计工具',
  bsn: '备案管理',
  cas: 'SSL 证书（应用安全）',
  cassandra: '云数据库 Cassandra 版',
  cbn: '云企业网',
  cbwp: '共享带宽',
  ccc: '云呼叫中心',
  ccp: '内容协作平台',
  ccs: '云客服',
  cddc: '云数据库专属集群',
  cdn: 'CDN',
  cdp: '数据集成（旧版）',
  cfw: '云防火墙',
  clickhouse: '云数据库 ClickHouse',
  cloudap: '云 AP',
  cloudauth: '实人认证',
  clouddesktop: '云桌面（废）',
  cloudesl: '云价签',
  cloudmonitor: '新云监控',
  cloudphoto: '智能云相册',
  cloudvpn: 'VPN自服务控制台',
  cms: '云监控',
  codepipeline: 'CodePipeline',
  companyreg: '工商财税',
  config: '配置审计',
  consolebench: '工具应用中心',
  cos: '容器服务',
  cps: '移动推送',
  cr: '容器镜像服务',
  csas: '云安全访问服务',
  csb: '云服务总线',
  csk: '容器服务 Kubernetes 版',
  cts: '内容安全（业务安全）',
  cvc: '云视频会议',
  datahub: '数据总线 DataHub',
  datai: '数据集成',
  dataphin: '智能数据构建与管理 Dataphin',
  datav: 'DataV 数据可视化',
  dbaudit: '数据库审计（数据安全）',
  dbes: '数据库专家服务',
  dbfs: '数据库文件存储 DBFS',
  dbs: '数据库备份 DBS',
  dcdn: '全站加速',
  ddos: 'DDoS 基础防护',
  ddosdip: 'DDoS高防（国际）',
  ddospro: 'DDoS 高防',
  dds: '云数据库 MongoDB 版',
  devCenter: '企业工作台研管平台',
  developer: 'API 控制台',
  dg: '数据库网关 DG',
  dide: 'DataWorks',
  dlf: '数据湖构建',
  dm: '邮件推送',
  dms: '数据管理 DMS',
  dns: '云解析 DNS',
  domain: '域名',
  dpc: '采云间',
  drds: '云原生分布式数据库 PolarDB-X（原 DRDS 升级版）',
  drp: 'DataQuotient 画像分析',
  dtplus_overview: '数加控制台概览',
  dtplus: '数加控制台',
  dts: '数据传输服务 DTS',
  dycdp: '流量服务',
  dyiot: '物联网无线连接服务',
  dypls: '号码隐私保护',
  dypns: '号码认证服务',
  dysms: '短信服务',
  dytns: '号码百科',
  dyvms: '语音服务',
  eais: '弹性加速计算实例',
  eci: '弹性容器实例 ECI',
  ecs: '云服务器 ECS',
  ecsm: '企业云财务管理',
  ecsold: '云服务器',
  edas: '企业级分布式应用服务 EDAS',
  ehpc: '弹性高性能计算',
  elasticsearch: '阿里云 Elasticsearch',
  emas: '移动研发平台 EMAS',
  emr: 'E-MapReduce',
  ens: '边缘节点服务 ENS',
  eprofile: '企业图谱',
  ess: '弹性伸缩',
  essold: '弹性伸缩',
  eventbridge: '事件总线 EventBridge',
  ews: '弹性 Web 托管',
  expense: '费用中心',
  expressconnect: '高速通道',
  face: '人脸识别',
  fc: '函数计算',
  feedback: '移动用户反馈',
  fenxiao: '渠道平台',
  flowpack: '通用流量包',
  fnf: 'Serverless 工作流',
  ga: '全球加速',
  gameshield: '游戏盾',
  gcs: '图计算服务',
  gds: '图数据库 GDB',
  gpdb: '云原生数据仓库 ADB PostgreSQL 版',
  gts: '全局事务服务',
  gw: '绿网',
  gws: '云桌面',
  hbase: '云数据库 HBase 版',
  hbr: '混合云备份',
  hcs_mgw: '闪电立方',
  hdm: '数据库自治服务 DAS',
  hdr: '混合云容灾',
  hologram: '交互式分析 Hologres',
  holowatcher: '全息空间',
  host: '云虚拟主机',
  hotfix: '移动热修复',
  hpc: '高性能计算',
  hsm: '加密服务（数据安全）',
  httpdns: 'HTTPDNS',
  ice: '智能媒体生产',
  idaas: '应用身份服务',
  image: '图像识别',
  imagesearch: '图像搜索',
  imm: '智能媒体管理',
  indvi: '智能工业·工业视觉智能',
  iot: '物联网平台',
  iotedge: '物联网边缘计算',
  iotid: 'IoT 设备身份认证',
  iovcc: '智联车管理云平台',
  ip: '弹性公网 IP',
  iplus: 'I+ 关系网络分析',
  ipv6trans: 'IPv6 转换服务',
  iqa: '智能语义理解',
  ivision: '智能视觉（模型训练预测）',
  kms: '密钥管理服务',
  kvstore: '云数据库 Redis 版',
  lc: '逻辑编排',
  ledgerdb: '可信账本数据库',
  linkwan: '物联网络管理平台',
  live: '视频直播',
  mail: '企业邮箱',
  man: '移动数据分析',
  market: '云市场',
  memcache: '云数据库 Memcache 版',
  mgw: '闪电立方',
  miniappdev: '小程序云',
  mns: '消息服务 MNS',
  mobsec: '移动安全（应用安全）',
  mpaas: '移动开发平台 mPaaS',
  mq4iot: '微消息队列 for MQTT',
  mqc: '移动测试',
  mqs: '消息队列服务',
  msc: '消息中心',
  mse: '微服务引擎',
  mss: '安全管家（安全服务）',
  mts: '媒体处理',
  multimediaai: '多媒体 AI',
  nas: '文件存储 NAS',
  nat_gw: 'NAT 网关',
  nlp: '自然语言处理',
  nls: '智能语音交互',
  npp: 'Node.js 性能平台',
  oas: '归档存储',
  oce: '云数据库 OceanBase',
  oceanbase: '云数据库 OceanBase 版',
  ocs: '云数据库 Memcache 版',
  odps: 'MaxCompute',
  ons: '消息队列 for Apache RocketMQ',
  oos: '运维编排服务',
  openad: '营销引擎',
  openanalytics: '数据湖分析',
  opensearch: '开放搜索',
  oss: '对象存储 OSS',
  ots: '表格存储',
  pai: '机器学习 PAI',
  pcdn: 'P2P 内容分发网络',
  petadata: '云数据库 HybridDB for MySQL ',
  polarDB: '云数据库 PolarDB',
  portrait: '画像分析',
  postgresql: '云数据库 RDS PostgreSQL 版',
  premiumpics: '图片与设计',
  prometheus: 'Prometheus 监控服务',
  prophet: '公众趋势分析',
  pts: '性能测试服务',
  quickbi: 'Quick BI',
  quotas: '配额中心',
  ram: '访问控制',
  rdc: '云效',
  rds: '云数据库 RDS 版',
  rdsmysql: '云数据库 RDS MySQL 版',
  rdssqlserver: '云数据库 RDS SQL Server 版',
  receng: '推荐引擎',
  renew: '续费管理',
  retailadvqa: '智能用户增长',
  retailir: '货架商品识别与管理',
  ri: '高速通道',
  ros: '资源编排',
  rsimganalys: '卫星及无人机遥感影像分析产品',
  rtc: '音视频通信 RTC',
  sae: 'Serverless 应用引擎（SAE）',
  saf: '风险识别（业务安全）',
  sas: '云安全中心（态势感知）',
  sca: '智能对话分析',
  scdn: '安全加速 SCDN',
  schedulerx: '企业级分布式应用服务',
  sddp: '敏感数据保护（数据安全）',
  servicemesh: '服务网格',
  sgw: '云存储网关',
  slb: '负载均衡',
  slm: '安全日志管理',
  sls: '日志服务',
  smartag: '智能接入网关',
  sms: '短信服务',
  snsu: '云通信网络加速',
  sofa: '金融分布式架构 SOFAStack',
  spc: '支持与服务',
  sppc: '合作伙伴产品中心',
  stp: '共享流量包',
  stream: '实时计算',
  swas: '轻量应用服务器',
  swcopyright: '软件著作权登记',
  tdsr: '三维空间重建',
  trademark: '商标服务',
  tsdb: '时序数据库 TSDB',
  usableCenter: '可用性中心',
  usercenter: 'usercenter',
  vcs: '视觉计算服务',
  vision: '视觉智能开放平台',
  VisionIntelligence: '智能视觉 AI 开放平台',
  vod: '视频点播',
  vpc: '专有网络 VPC',
  vpn: 'VPN 网关',
  vs: '视频监控',
  waf: 'Web 应用防火墙（网络安全）',
  webhosting_intl: '虚拟主机',
  website: '标准建站',
  webx: 'Web应用托管服务（Web+）',
  workorder: '工单管理',
  xtrace: '链路追踪',
  xz: '先知（安全服务）',
  yida: '宜搭',
  yundun_overview: '云盾控制台概览',
  yundun: '云盾'
};

export default function List(): JSX.Element {
  const [stateFilter, setStateFilter] = useState<string>('');
  const filterUC = stateFilter.trim().toUpperCase();
  const typeSet = new Set<string>([...Object.keys(EIconType), ...Object.keys(PRODUCT_MAPPING)]);
  
  typeSet.delete('_'); // 不要
  
  const typesAll = Array.from(typeSet).sort((v1, v2) => {
    const v1Upper = v1.toUpperCase();
    const v2Upper = v2.toUpperCase();
    
    return v1Upper > v2Upper ? 1 : -1;
  }) as IconProductType[];
  const filteredTypes = filterUC ? typesAll.filter(v => {
    return v.toUpperCase().includes(filterUC) || PRODUCT_MAPPING[v]?.toUpperCase().includes(filterUC);
  }) : typesAll;
  let countOk = 0;
  let countNotProduct = 0; // 没图标的产品
  let countNotDefined = 0; // 不存在的产品（在 viper 上有，但没有透出到控制台）
  
  typesAll.forEach(v => {
    if (!PRODUCT_MAPPING[v]) {
      countNotProduct += 1;
    } else if (!EIconType[v]) {
      countNotDefined += 1;
    } else {
      countOk += 1;
    }
  });
  
  return <>
    <div>
      <InputText {...{
        placeholder: 'Filter by product code',
        onChange: setStateFilter
      }} />
      <ScMessage>{typesAll.length} = 没图标的产品：<strong className="no-type">{countNotProduct}</strong> + 不存在的产品：<strong className="no-product">{countNotDefined}</strong> + 存在的产品：{countOk}</ScMessage>
    </div>
    <ScList>
      {filteredTypes.map(v => {
        const productName = PRODUCT_MAPPING[v];
        let className = '';
        
        if (!productName) {
          className = 'no-product';
        } else if (!EIconType[v]) {
          className = 'no-type';
        }
        
        return <li key={v} className={className}>
          <IconProduct type={v} />
          <div>{v}</div>
          <div>{productName}</div>
        </li>;
      })}
    </ScList>
  </>;
}
