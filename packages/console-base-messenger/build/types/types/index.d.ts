import { SettingsRegionItem, SettingsRegionGroup, SettingsToolkitItem } from '@alicloud/console-base-common-typings';
export interface IPayloadRegion extends SettingsRegionItem {
}
export interface IPayloadRegionOnChange extends IPayloadRegion {
    correctedFrom?: string;
}
export interface IPayloadRegionGroup extends SettingsRegionGroup {
}
export interface IPayloadResourceGroup {
    id: string;
    name: string;
    defaultOne?: boolean;
}
export interface IPayloadLaunchTutorial {
    title?: string;
    contents: string[];
    width?: number;
    step?: number;
}
export interface IPayloadLaunchWidget<P = void, E = void> {
    id: string;
    version: string;
    props?: P;
    extra?: E;
}
export interface IPayloadPutTool {
    tool: SettingsToolkitItem;
}
/**
 * Fastbuy payload 类型定义
 */
export interface IPayloadFastbuy {
    commodityCode: string;
}
