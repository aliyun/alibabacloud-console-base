import ready from './ready';
import regionChange from './region-change';
import regionRefreshResourceCount from './region-refresh-resource-count';
import resourceGroupDataLoaded from './resource-group-data-loaded';
import resourceGroupChange from './resource-group-change';
import toolkitToolClicked from './toolkit-tool-clicked';
import toolkitToolActiveChanged from './toolkit-tool-active-change';
import fastbuyClose from './fastbuy-close';
import fastbuyBuy from './fastbuy-buy';
import fastbuySubmitPayment from './fastbuy-submit-payment';
import fastbuyOrderFinish from './fastbuy-order-finish';

/* --------------------------------------------- *
 * console-base 调用：通知控制台应用
 * 
 * 由 app-subscribe 下的方法响应
 * --------------------------------------------- */
export default {
  ready,
  regionChange,
  regionRefreshResourceCount,
  resourceGroupDataLoaded,
  resourceGroupChange,
  toolkitToolClicked,
  toolkitToolActiveChanged,
  fastbuyClose,
  fastbuyBuy,
  fastbuySubmitPayment,
  fastbuyOrderFinish
};
