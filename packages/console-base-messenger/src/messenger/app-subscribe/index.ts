import onReady from './on-ready';
import onThemeChange from './on-theme-change';
import onRegionChange from './region/on-region-change';
import onRegionRefreshResourceCount from './region/on-region-refresh-resource-count';
import onResourceGroupDataLoaded from './resource-group/on-resource-group-data-loaded';
import onResourceGroupChange from './resource-group/on-resource-group-change';
import onToolkitItemClick from './toolkit/on-toolkit-item-click';
import onToolkitVersionNewClick from './toolkit/on-toolkit-version-new-click';
import onToolkitVersionOldClick from './toolkit/on-toolkit-version-old-click';
import onToolkitItemActiveChange from './toolkit/on-toolkit-item-active-change';
import onFastbuyClose from './fastbuy/on-fastbuy-close';
import onFastbuyBuy from './fastbuy/on-fastbuy-buy';
import onFastbuySubmitPayment from './fastbuy/on-fastbuy-submit-payment';
import onFastbuyOrderFinish from './fastbuy/on-fastbuy-order-finish';
import onTutorStepChange from './tutor/on-step-change';
import onTutorDismiss from './tutor/on-dismiss';

/* --------------------------------------------- *
 * 控制台应用调用：响应 console-base 通知
 * 
 * 响应 console-base-broadcast 下对应的方法
 * --------------------------------------------- */
export default {
  onReady,
  onThemeChange,
  onRegionChange,
  onRegionRefreshResourceCount,
  onResourceGroupDataLoaded,
  onResourceGroupChange,
  onToolkitItemClick,
  onToolkitVersionNewClick,
  onToolkitVersionOldClick,
  onToolkitItemActiveChange,
  onFastbuyClose,
  onFastbuyBuy,
  onFastbuySubmitPayment,
  onFastbuyOrderFinish,
  onTutorStepChange,
  onTutorDismiss
};
