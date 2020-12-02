import { IHijacker } from '../types';
export declare const DATA_CLICK_HIJACK_IGNORE = "data-click-hijack-ignore";
/**
 * 全局点击劫持只需要一个事件，该事件会遍历这个列表
 */
export declare const GLOBAL_CLICK_HIJACKERS: IHijacker<any>[];
