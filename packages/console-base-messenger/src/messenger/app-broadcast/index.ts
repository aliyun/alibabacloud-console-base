import promptError from './misc/prompt-error';
import fetcherRequest from './misc/fetcher-request';
import toggleTopNav from './misc/toggle-top-nav';
import armsError from './misc/arms-error';
import launchTutorial from './misc/launch-tutorial';
import launchWidget from './misc/launch-widget';
import toggleRegion from './region/toggle-region';
import toggleRegionGlobal from './region/toggle-region-global';
import setRegionId from './region/set-region-id';
import setRegions from './region/set-regions';
import setRegionGroups from './region/set-region-groups';
import setRegionResourceCount from './region/set-region-resource-count';
import toggleResourceGroup from './resource-group/toggle-resource-group';
import setResourceGroupId from './resource-group/set-resource-group-id';
import setResourceGroupResourceCount from './resource-group/set-resource-group-resource-count';
import setGoTopContainer from './toolkit/set-go-top-container';
import putToolkitItem from './toolkit/put-toolkit-item';
import removeToolkitItem from './toolkit/remove-toolkit-item';
import registerTutor from './tutor/register';
import openTutor from './tutor/open';
import closeTutor from './tutor/close';

/* --------------------------------------------- *
 * 控制台调用
 * 
 * 具体的实现由 console-base 对 console-base-subscribe 中的 `on同名方法` 传入回调完成
 * --------------------------------------------- */
export default {
  promptError,
  fetcherRequest,
  toggleTopNav,
  armsError,
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
  removeToolkitItem,
  registerTutor,
  openTutor,
  closeTutor
};
