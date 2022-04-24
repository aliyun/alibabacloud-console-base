import {
  AsideNavProps
} from '../../src';

const NAV: AsideNavProps = {
  title: 'Viper',
  items: [{
    label: '概览',
    href: '#/dashboard',
    selected: true
  }, {
    label: '应用管理',
    href: '#/app'
  }, {
    label: '产品管理',
    href: '#/product'
  }, {
    label: 'SHOULD HIDE',
    subItems: [null, null]
  }, '-', {
    label: 'SHOULD HIDE',
    subItems: [null, null]
  }, '-', {
    label: 'TODO',
    href: '#/todo'
  }],
  itemsInFooter: [{
    label: '你好呀',
    href: '#/hello'
  }, {
    label: '我很好',
    href: '#/hello_back'
  }]
};

export default NAV;