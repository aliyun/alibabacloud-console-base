import {
  AsideNavProps
} from '../../src';

const NAV: AsideNavProps = {
  title: 'Viper',
  defaultUnfolded: false,
  items: [null, '-', {
    key: 'dashboard',
    label: '概览',
    href: '#/dashboard'
  }, {
    key: 'app',
    label: '应用管理',
    href: '#/app'
  }, {
    key: 'product',
    label: '产品管理',
    href: '#/product'
  }, '-', {
    key: 'dev',
    label: '控制台开发',
    subItems: [null, '-', {
      key: 'tutor',
      label: '微教程',
      href: '#/tutor',
      mark: 'new'
    }, '-', {
      key: 'ros',
      label: 'ROS 模板',
      href: '#/ros'
    }, {
      key: 'scene',
      label: '场景模板',
      href: '#/scene'
    }, '-', {
      key: 'medusa',
      label: '美杜莎发布',
      href: '#/medusa'
    }],
    defaultUnfolded: true
  }, '-', {
    key: 'will-not-show',
    label: '不会展示，因为底下没有可用菜单项',
    subItems: [null, '-', null, '-', null]
  }, '-', {
    key: 'api',
    label: 'API 管理',
    subItems: [{
      key: 'apis_open',
      label: 'OpenAPI',
      href: '#/apis/open'
    }, {
      key: 'apis_inner',
      label: 'InnerAPI',
      href: '#/apis/inner'
    }, {
      key: 'apis_container',
      label: 'ContainerAPI',
      href: '#/apis/container'
    }, {
      key: 'apis_intranet',
      label: 'IntranetAPI',
      href: '#/apis/intranet'
    }, {
      key: 'api_conf',
      label: 'API 配置',
      subItems: [{
        key: 'apis_fecs',
        label: 'FECS 白名单',
        href: '#/apis/fecs'
      }, {
        key: 'apis_endpoint',
        label: 'Endpoint 管理',
        href: '#/apis/endpoint'
      }, {
        key: 'apis_oneserver',
        label: '微服务 OneServer',
        href: '#/apis/oneserver'
      }]
    }],
    defaultUnfolded: true
  }, '-', {
    key: 'util',
    label: '实用工具',
    subItems: [{
      key: 'util',
      label: '常用查询',
      href: '#/util'
    }, {
      key: 'log/viper',
      label: '操作日志',
      href: '#/log/viper'
    }, {
      key: 'sls',
      label: 'SLS 日志查询',
      subItems: [{
        key: 'sls/one',
        label: 'OneConsole',
        href: '#/sls/one'
      }, {
        key: 'sls/console-base',
        label: 'ConsoleBase',
        href: '#/sls/console-base',
        selected: true
      }, {
        key: 'sls/viper',
        label: 'Viper',
        href: '#/sls/viper'
      }]
    }, {
      key: 'dashboard',
      label: '数据大盘',
      subItems: [{
        key: 'dashboard/product',
        label: '控制台产品',
        href: '#/dashboard/product'
      }, {
        key: 'dashboard/help',
        label: '控制台文档',
        href: '#/dashboard/help'
      }, {
        key: 'dashboard/search',
        label: '控制台搜索',
        href: '#/dashboard/search'
      }]
    }],
    defaultUnfolded: true
  }, '-', {
    key: 'private',
    label: '专有云开发',
    subItems: [{
      key: 'private/product',
      label: '专有云产品',
      href: '#/private/product'
    }, {
      key: 'private/version-tree',
      label: '专有云版本树',
      href: '#/private/version-tree'
    }, {
      key: 'private/version-package',
      label: '专有云版本包详情',
      href: '#/private/version-package'
    }, {
      key: 'private/util',
      label: '专有云工具',
      href: '#/private/util'
    }]
  }, '-', {
    key: 'mobile',
    label: '移动端开发',
    subItems: [{
      key: 'mobile_conf',
      label: '移动端配置',
      href: '#/mobile/conf'
    }, {
      key: 'mobile_conf_new',
      label: '移动端配置',
      href: '#/mobile/conf-new',
      mark: 'new'
    }, {
      key: 'mobile_snippet',
      label: '移动端 Snippet 管理',
      href: '#/mobile/snippet'
    }]
  }, '-', {
    key: 'console_starter',
    label: 'ConsoleStarter',
    subItems: [{
      key: 'console-starter/my',
      label: '我的任务',
      href: '#/console-starter/my'
    }, {
      key: 'console-starter/task',
      label: '任务管理',
      href: '#/console-starter/task'
    }, {
      key: 'console-starter/process',
      label: '流程进度',
      href: '#/console-starter/process'
    }]
  }, '-', {
    key: 'sys',
    label: '系统管理',
    subItems: [{
      key: 'sys/channel',
      label: '渠道管理',
      href: '#/sys/channel'
    }, {
      key: 'sys/region',
      label: '地域管理',
      href: '#/sys/region'
    }, {
      key: 'vco',
      label: '虚商管理',
      href: '#/vco'
    }, {
      key: 'stability',
      label: '稳定性',
      subItems: [{
        key: 'stability/svc2nd',
        label: '二方服务容灾',
        href: '#/stability/svc2nd'
      }, {
        key: 'stability/endpoint',
        label: 'Endpoint 容灾',
        href: '#/stability/endpoint'
      }, {
        key: 'stability/console-base',
        label: 'ConsoleBase 容灾',
        href: '#/stability/console-base'
      }, {
        key: 'stability/smart-routing',
        label: '智能路由',
        href: '#/stability/smart-routing'
      }, {
        key: 'domain-rule',
        label: '域名规则',
        href: '#/stability/domain-rule'
      }, {
        key: 'domain-offline',
        label: '域名下线',
        href: '#/stability/domain-offline'
      }, {
        key: 'stability/inspection',
        label: '巡检系统',
        href: '#/stability/inspection'
      }]
    }]
  }],
  itemsInFooter: [{
    key: 'hello',
    label: '你好呀',
    href: '#/hello'
  }, {
    key: 'hello_back',
    label: '我很好',
    href: '#/hello_back'
  }]
};

export default NAV;
