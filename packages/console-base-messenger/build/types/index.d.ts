import { IPayloadRegion as MessengerRegion, IPayloadRegionOnChange as MessengerRegionOnChange, IPayloadRegionGroup as MessengerRegionGroup, IPayloadResourceGroup as MessengerResourceGroup, IPayloadLaunchTutorial as MessengerTutorial } from './types';
import { EToolkitIdSystem } from './const';
/**
 * 给控制台使用
 */
export declare const forApp: {
    onReady: typeof import("./messenger/app-subscribe/on-ready").default;
    onRegionChange: typeof import("./messenger/app-subscribe/on-region-change").default;
    onRegionRefreshResourceCount: typeof import("./messenger/app-subscribe/on-region-refresh-resource-count").default;
    onResourceGroupDataLoaded: typeof import("./messenger/app-subscribe/on-resource-group-data-loaded").default;
    onResourceGroupChange: typeof import("./messenger/app-subscribe/on-resource-group-change").default;
    onToolkitItemClick: typeof import("./messenger/app-subscribe/on-toolkit-item-click").default;
    onToolkitVersionNewClick: typeof import("./messenger/app-subscribe/on-toolkit-version-new-click").default;
    onToolkitVersionOldClick: typeof import("./messenger/app-subscribe/on-toolkit-version-old-click").default;
    onToolkitItemActiveChange: typeof import("./messenger/app-subscribe/on-toolkit-item-active-change").default;
    onFastbuyClose: typeof import("./messenger/app-subscribe/on-fastbuy-close").default;
    onFastbuyBuy: typeof import("./messenger/app-subscribe/on-fastbuy-buy").default;
    onFastbuySubmitPayment: typeof import("./messenger/app-subscribe/on-fastbuy-submit-payment").default;
    onFastbuyOrderFinish: typeof import("./messenger/app-subscribe/on-fastbuy-order-finish").default;
    promptError: typeof import("./messenger/app-broadcast/prompt-error").default;
    fetcherRequest: typeof import("./messenger/app-broadcast/fetcher-request").default;
    toggleTopNav: typeof import("./messenger/app-broadcast/toggle-top-nav").default;
    launchTutorial: typeof import("./messenger/app-broadcast/launch-tutorial").default;
    launchWidget: typeof import("./messenger/app-broadcast/launch-widget").default;
    toggleRegion: typeof import("./messenger/app-broadcast/toggle-region").default;
    toggleRegionGlobal: typeof import("./messenger/app-broadcast/toggle-region-global").default;
    setRegionId: typeof import("./messenger/app-broadcast/set-region-id").default;
    setRegions: typeof import("./messenger/app-broadcast/set-regions").default;
    setRegionGroups: typeof import("./messenger/app-broadcast/set-region-groups").default;
    setRegionResourceCount: typeof import("./messenger/app-broadcast/set-region-resource-count").default;
    toggleResourceGroup: typeof import("./messenger/app-broadcast/toggle-resource-group").default;
    setResourceGroupId: typeof import("./messenger/app-broadcast/set-resource-group-id").default;
    setResourceGroupResourceCount: typeof import("./messenger/app-broadcast/set-resource-group-resource-count").default;
    setGoTopContainer: typeof import("./messenger/app-broadcast/set-go-top-container").default;
    putToolkitItem: typeof import("./messenger/app-broadcast/put-toolkit-item").default;
    removeToolkitItem: typeof import("./messenger/app-broadcast/remove-toolkit-item").default;
};
/**
 * 给 console-base 使用
 */
export declare const forConsoleBase: {
    onPromptError: typeof import("./messenger/console-base-subscribe/on-prompt-error").default;
    onFetcherRequest: typeof import("./messenger/console-base-subscribe/on-fetcher-request").default;
    onToggleTopNav: typeof import("./messenger/console-base-subscribe/on-toggle-top-nav").default;
    onLaunchTutorial: typeof import("./messenger/console-base-subscribe/on-launch-tutorial").default;
    onLaunchWidget: typeof import("./messenger/console-base-subscribe/on-launch-widget").default;
    onToggleRegion: typeof import("./messenger/console-base-subscribe/on-toggle-region").default;
    onToggleRegionGlobal: typeof import("./messenger/console-base-subscribe/on-toggle-region-global").default;
    onSetRegionId: typeof import("./messenger/console-base-subscribe/on-set-region-id").default;
    onSetRegions: typeof import("./messenger/console-base-subscribe/on-set-regions").default;
    onSetRegionGroups: typeof import("./messenger/console-base-subscribe/on-set-region-groups").default;
    onSetRegionResourceCount: typeof import("./messenger/console-base-subscribe/on-set-region-resource-count").default;
    onToggleResourceGroup: typeof import("./messenger/console-base-subscribe/on-toggle-resource-group").default;
    onSetResourceGroupId: typeof import("./messenger/console-base-subscribe/on-set-resource-group-id").default;
    onSetResourceGroupResourceCount: typeof import("./messenger/console-base-subscribe/on-set-resource-group-resource-count").default;
    onSetGoTopContainer: typeof import("./messenger/console-base-subscribe/on-set-go-top-container").default;
    onToolkitPut: typeof import("./messenger/console-base-subscribe/on-toolkit-put").default;
    onToolkitRemove: typeof import("./messenger/console-base-subscribe/on-toolkit-remove").default;
    ready: typeof import("./messenger/console-base-broadcast/ready").default;
    regionChange: typeof import("./messenger/console-base-broadcast/region-change").default;
    regionRefreshResourceCount: typeof import("./messenger/console-base-broadcast/region-refresh-resource-count").default;
    resourceGroupDataLoaded: typeof import("./messenger/console-base-broadcast/resource-group-data-loaded").default;
    resourceGroupChange: typeof import("./messenger/console-base-broadcast/resource-group-change").default;
    toolkitToolClicked: typeof import("./messenger/console-base-broadcast/toolkit-tool-clicked").default;
    toolkitToolActiveChanged: typeof import("./messenger/console-base-broadcast/toolkit-tool-active-change").default;
    fastbuyClose: typeof import("./messenger/console-base-broadcast/fastbuy-close").default;
    fastbuyBuy: typeof import("./messenger/console-base-broadcast/fastbuy-buy").default;
    fastbuySubmitPayment: typeof import("./messenger/console-base-broadcast/fastbuy-submit-payment").default;
    fastbuyOrderFinish: typeof import("./messenger/console-base-broadcast/fastbuy-order-finish").default;
};
export { EToolkitIdSystem };
export type { MessengerRegion, MessengerRegionOnChange, MessengerRegionGroup, MessengerResourceGroup, MessengerTutorial };
