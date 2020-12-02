import promptError from './prompt-error';
import fetcherRequest from './fetcher-request';
import toggleTopNav from './toggle-top-nav';
import launchTutorial from './launch-tutorial';
import launchWidget from './launch-widget';
import toggleRegion from './toggle-region';
import toggleRegionGlobal from './toggle-region-global';
import setRegionId from './set-region-id';
import setRegions from './set-regions';
import setRegionGroups from './set-region-groups';
import setRegionResourceCount from './set-region-resource-count';
import toggleResourceGroup from './toggle-resource-group';
import setResourceGroupId from './set-resource-group-id';
import setResourceGroupResourceCount from './set-resource-group-resource-count';
import setGoTopContainer from './set-go-top-container';
import putToolkitItem from './put-toolkit-item';
import removeToolkitItem from './remove-toolkit-item';

/* --------------------------------------------- *
 * 控制台调用
 * 
 * 具体的实现由 console-base 对 console-base-subscribe 中的 `on同名方法` 传入回调完成
 * --------------------------------------------- */
export default {
  promptError,
  fetcherRequest,
  toggleTopNav,
  launchTutorial,
  launchWidget,
  toggleRegion,
  toggleRegionGlobal,
  setRegionId,
  setRegions,
  setRegionGroups,
  setRegionResourceCount,
  toggleResourceGroup,
  setResourceGroupId,
  setResourceGroupResourceCount,
  setGoTopContainer,
  putToolkitItem,
  removeToolkitItem
};
