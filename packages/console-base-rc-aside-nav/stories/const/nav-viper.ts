import {
  AsideNavProps
} from '../../src';

const NAV: AsideNavProps = {
  title: 'Viper',
  subItemsUnfolded: false,
  items: [{
    label: '概览',
    href: '#/dashboard',
    selected: true
  }, {
    label: '产品管理',
    href: '#/product'
  }, '-', {
    label: '控制台开发',
    subItems: [{
      label: '应用管理',
      href: '#/app'
    }, {
      label: '微教程',
      href: '#/tutor'
    }, {
      label: '其他',
      subItems: [{
        label: 'ROS 模板',
        href: '#/ros'
      }, {
        label: '美杜莎发布',
        href: '#/medusa'
      }, {
        label: '域名规则',
        href: '#/domain-rule'
      }, {
        label: '域名下线',
        href: '#/domain-offline'
      }, {
        label: '场景模板',
        href: '#/scene'
      }]
    }],
    subItemsUnfolded: true
  }, '-', {
    label: 'API 管理',
    subItems: [{
      label: 'OpenAPI',
      href: '#/apis/open'
    }, {
      label: 'InnerAPI',
      href: '#/apis/inner'
    }, {
      label: 'ContainerAPI',
      href: '#/apis/container'
    }, {
      label: 'IntranetAPI',
      href: '#/apis/intranet'
    }, {
      label: 'API 配置',
      subItems: [{
        label: 'FECS 白名单', // 在「稳定性」下，移过来
        href: '#/apis/fecs'
      }, {
        label: 'Endpoint 管理',
        href: '#/apis/endpoint'
      }, {
        label: '微服务 OneServer',
        href: '#/apis/oneserver'
      }]
    }],
    subItemsUnfolded: true
  }, '-', {
    label: '实用工具',
    subItems: [{
      label: '常用查询',
      href: '#/util'
    }, {
      label: '操作日志',
      href: '#/log/viper'
    }, {
      label: 'SLS 日志查询',
      subItems: [{
        label: 'OneConsole',
        href: '#/sls/one'
      }, {
        label: 'ConsoleBase',
        href: '#/sls/console-base'
      }, {
        label: 'Viper',
        href: '#/sls/viper'
      }]
    }, {
      label: '数据大盘',
      subItems: [{
        label: '控制台产品',
        href: '#/dashboard/product'
      }, {
        label: '控制台文档',
        href: '#/dashboard/help'
      }, {
        label: '控制台搜索',
        href: '#/dashboard/search'
      }]
    }],
    subItemsUnfolded: true
  }, '-', {
    label: '专有云开发',
    subItems: [{
      label: '专有云产品',
      href: '#/private/product'
    }, {
      label: '专有云版本树',
      href: '#/private/version-tree'
    }, {
      label: '专有云版本包详情',
      href: '#/private/version-package'
    }, {
      label: '专有云工具',
      href: '#/private/util'
    }]
  }, '-', {
    label: '移动端开发',
    subItems: [{
      label: '移动端配置',
      href: '#/mobile/conf'
    }, {
      label: '移动端配置',
      href: '#/mobile/conf-new',
      mark: 'new'
    }, {
      label: 'Snippet 管理',
      href: '#/mobile/snippet'
    }]
  }, '-', {
    label: 'ConsoleStarter',
    subItems: [{
      label: '我的任务',
      href: '#/console-starter/my'
    }, {
      label: '任务管理',
      href: '#/console-starter/task'
    }, {
      label: '流程进度',
      href: '#/console-starter/process'
    }]
  }, '-', {
    label: '系统管理',
    subItems: [{
      label: '渠道管理',
      href: '#/sys/channel'
    }, {
      label: '地域管理',
      href: '#/sys/region'
    }, {
      label: '虚商管理',
      href: '#/vco'
    }, {
      label: '稳定性',
      subItems: [{
        label: '二方服务容灾',
        href: '#/stability/svc2nd'
      }, {
        label: 'Endpoint 容灾',
        href: '#/stability/endpoint'
      }, {
        label: 'ConsoleBase 容灾',
        href: '#/stability/console-base'
      }, {
        label: '智能路由',
        href: '#/stability/smart-routing'
      }, {
        label: '巡检系统',
        href: '#/stability/inspection'
      }]
    }]
  }]
};

export default NAV;