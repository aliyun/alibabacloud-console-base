import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useCallback } from 'react';
import { H3, P, Button, InputTextarea } from '@alicloud/demo-rc-elements';
import { forApp } from '@alicloud/console-base-messenger';
var REGION_GROUPS = [{
  name: '地球',
  regions: [{
    id: 'cn-hangzhou',
    name: '杭州'
  }, {
    id: 'cn-shanghai',
    name: '上海'
  }, {
    id: 'cn-chengdu',
    name: '成都'
  }, {
    id: 'cn-beijing',
    name: '背景'
  }, {
    id: 'us-alibaba',
    name: '阿里巴巴美国'
  }]
}, {
  name: '驳是',
  regions: [{
    id: 'cn-wuchang',
    name: '五常'
  }, {
    id: 'cn-beihang',
    name: '北航'
  }, {
    id: 'cn-boshit',
    name: '驳是'
  }, {
    id: 'cn-alibaba',
    name: '阿里巴巴美国'
  }]
}];
export default function SetRegionGroups() {
  var _useState = useState(JSON.stringify(REGION_GROUPS)),
      _useState2 = _slicedToArray(_useState, 2),
      stateValue = _useState2[0],
      setStateValue = _useState2[1];

  var handleInputChange = useCallback(function (e) {
    var value = e.target.value;
    setStateValue(value);
  }, []);
  var handleSet = useCallback(function () {
    return forApp.setRegionGroups(JSON.parse(stateValue));
  }, [stateValue]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H3, null, "forApp.setRegionGroups(regions)"), /*#__PURE__*/React.createElement(P, null, "\u8BBE\u7F6E\u53EF\u7528 region \u5206\u7EC4\u5217\u8868\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E regions\uFF08\u81EA\u52A8\u5207\u6362\u4E3A\u300C\u975E\u5168\u7403\u300D\u6A21\u5F0F\uFF09"), /*#__PURE__*/React.createElement(InputTextarea, {
    onChange: handleInputChange,
    value: stateValue
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: handleSet
  }, "\u8BBE\u7F6E"));
}