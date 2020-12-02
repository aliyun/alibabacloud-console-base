"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _onPromptError = _interopRequireDefault(require("./on-prompt-error"));

var _onFetcherRequest = _interopRequireDefault(require("./on-fetcher-request"));

var _onToggleTopNav = _interopRequireDefault(require("./on-toggle-top-nav"));

var _onLaunchTutorial = _interopRequireDefault(require("./on-launch-tutorial"));

var _onLaunchWidget = _interopRequireDefault(require("./on-launch-widget"));

var _onToggleRegion = _interopRequireDefault(require("./on-toggle-region"));

var _onToggleRegionGlobal = _interopRequireDefault(require("./on-toggle-region-global"));

var _onSetRegionId = _interopRequireDefault(require("./on-set-region-id"));

var _onSetRegions = _interopRequireDefault(require("./on-set-regions"));

var _onSetRegionGroups = _interopRequireDefault(require("./on-set-region-groups"));

var _onSetRegionResourceCount = _interopRequireDefault(require("./on-set-region-resource-count"));

var _onToggleResourceGroup = _interopRequireDefault(require("./on-toggle-resource-group"));

var _onSetResourceGroupId = _interopRequireDefault(require("./on-set-resource-group-id"));

var _onSetResourceGroupResourceCount = _interopRequireDefault(require("./on-set-resource-group-resource-count"));

var _onSetGoTopContainer = _interopRequireDefault(require("./on-set-go-top-container"));

var _onToolkitPut = _interopRequireDefault(require("./on-toolkit-put"));

var _onToolkitRemove = _interopRequireDefault(require("./on-toolkit-remove"));

/* --------------------------------------------- *
 * console-base 必须实现这里所有事件的处理
 * 
 * 响应控制台对 console-base-broadcast 下对应的方法
 * --------------------------------------------- */
var _default = {
  onPromptError: _onPromptError.default,
  onFetcherRequest: _onFetcherRequest.default,
  onToggleTopNav: _onToggleTopNav.default,
  onLaunchTutorial: _onLaunchTutorial.default,
  onLaunchWidget: _onLaunchWidget.default,
  onToggleRegion: _onToggleRegion.default,
  onToggleRegionGlobal: _onToggleRegionGlobal.default,
  onSetRegionId: _onSetRegionId.default,
  onSetRegions: _onSetRegions.default,
  onSetRegionGroups: _onSetRegionGroups.default,
  onSetRegionResourceCount: _onSetRegionResourceCount.default,
  onToggleResourceGroup: _onToggleResourceGroup.default,
  onSetResourceGroupId: _onSetResourceGroupId.default,
  onSetResourceGroupResourceCount: _onSetResourceGroupResourceCount.default,
  onSetGoTopContainer: _onSetGoTopContainer.default,
  onToolkitPut: _onToolkitPut.default,
  onToolkitRemove: _onToolkitRemove.default
};
exports.default = _default;