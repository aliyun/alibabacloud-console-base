import onReady from './on-ready';
import onRegionChange from './on-region-change';
import onRegionRefreshResourceCount from './on-region-refresh-resource-count';
import onResourceGroupDataLoaded from './on-resource-group-data-loaded';
import onResourceGroupChange from './on-resource-group-change';
import onToolkitItemClick from './on-toolkit-item-click';
import onToolkitVersionNewClick from './on-toolkit-version-new-click';
import onToolkitVersionOldClick from './on-toolkit-version-old-click';
import onToolkitItemActiveChange from './on-toolkit-item-active-change';
import onThemeChange from './on-theme-change';
import onFastbuyClose from './on-fastbuy-close';
import onFastbuyBuy from './on-fastbuy-buy';
import onFastbuySubmitPayment from './on-fastbuy-submit-payment';
import onFastbuyOrderFinish from './on-fastbuy-order-finish';

/* --------------------------------------------- *
 * 控制台应用调用：响应 console-base 通知
 * 
 * 响应 console-base-broadcast 下对应的方法
 * --------------------------------------------- */
export default {
  onReady,
  onRegionChange,
  onRegionRefreshResourceCount,
  onResourceGroupDataLoaded,
  onResourceGroupChange,
  onToolkitItemClick,
  onToolkitVersionNewClick,
  onToolkitVersionOldClick,
  onToolkitItemActiveChange,
  onThemeChange,
  onFastbuyClose,
  onFastbuyBuy,
  onFastbuySubmitPayment,
  onFastbuyOrderFinish
};
