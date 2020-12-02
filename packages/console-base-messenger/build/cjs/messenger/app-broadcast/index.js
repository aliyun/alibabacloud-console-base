"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _promptError = _interopRequireDefault(require("./prompt-error"));

var _fetcherRequest = _interopRequireDefault(require("./fetcher-request"));

var _toggleTopNav = _interopRequireDefault(require("./toggle-top-nav"));

var _launchTutorial = _interopRequireDefault(require("./launch-tutorial"));

var _launchWidget = _interopRequireDefault(require("./launch-widget"));

var _toggleRegion = _interopRequireDefault(require("./toggle-region"));

var _toggleRegionGlobal = _interopRequireDefault(require("./toggle-region-global"));

var _setRegionId = _interopRequireDefault(require("./set-region-id"));

var _setRegions = _interopRequireDefault(require("./set-regions"));

var _setRegionGroups = _interopRequireDefault(require("./set-region-groups"));

var _setRegionResourceCount = _interopRequireDefault(require("./set-region-resource-count"));

var _toggleResourceGroup = _interopRequireDefault(require("./toggle-resource-group"));

var _setResourceGroupId = _interopRequireDefault(require("./set-resource-group-id"));

var _setResourceGroupResourceCount = _interopRequireDefault(require("./set-resource-group-resource-count"));

var _setGoTopContainer = _interopRequireDefault(require("./set-go-top-container"));

var _putToolkitItem = _interopRequireDefault(require("./put-toolkit-item"));

var _removeToolkitItem = _interopRequireDefault(require("./remove-toolkit-item"));

/* --------------------------------------------- *
 * 控制台调用
 * 
 * 具体的实现由 console-base 对 console-base-subscribe 中的 `on同名方法` 传入回调完成
 * --------------------------------------------- */
var _default = {
  promptError: _promptError.default,
  fetcherRequest: _fetcherRequest.default,
  toggleTopNav: _toggleTopNav.default,
  launchTutorial: _launchTutorial.default,
  launchWidget: _launchWidget.default,
  toggleRegion: _toggleRegion.default,
  toggleRegionGlobal: _toggleRegionGlobal.default,
  setRegionId: _setRegionId.default,
  setRegions: _setRegions.default,
  setRegionGroups: _setRegionGroups.default,
  setRegionResourceCount: _setRegionResourceCount.default,
  toggleResourceGroup: _toggleResourceGroup.default,
  setResourceGroupId: _setResourceGroupId.default,
  setResourceGroupResourceCount: _setResourceGroupResourceCount.default,
  setGoTopContainer: _setGoTopContainer.default,
  putToolkitItem: _putToolkitItem.default,
  removeToolkitItem: _removeToolkitItem.default
};
exports.default = _default;