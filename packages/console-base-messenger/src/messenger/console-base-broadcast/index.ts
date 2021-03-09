import ready from './ready';
import themeChange from './theme-change';
import regionChange from './region/region-change';
import regionRefreshResourceCount from './region/region-refresh-resource-count';
import resourceGroupDataLoaded from './resource-group/resource-group-data-loaded';
import resourceGroupChange from './resource-group/resource-group-change';
import toolkitToolClicked from './toolkit/toolkit-tool-clicked';
import toolkitToolActiveChanged from './toolkit/toolkit-tool-active-change';
import fastbuyClose from './fastbuy/fastbuy-close';
import fastbuyBuy from './fastbuy/fastbuy-buy';
import fastbuySubmitPayment from './fastbuy/fastbuy-submit-payment';
import fastbuyOrderFinish from './fastbuy/fastbuy-order-finish';
import tutorStepChange from './tutor/step-change';
import tutorDismiss from './tutor/dismiss';

/* --------------------------------------------- *
 * console-base 调用：通知控制台应用
 * 
 * 由 app-subscribe 下的方法响应
 * --------------------------------------------- */
export default {
  ready,
  themeChange,
  regionChange,
  regionRefreshResourceCount,
  resourceGroupDataLoaded,
  resourceGroupChange,
  toolkitToolClicked,
  toolkitToolActiveChanged,
  fastbuyClose,
  fastbuyBuy,
  fastbuySubmitPayment,
  fastbuyOrderFinish,
  tutorStepChange,
  tutorDismiss
};
