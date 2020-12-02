import { ELoading } from '../const';
var LOADED = [ELoading.SUCCESS, ELoading.ERROR];
/**
 * 通用的判断是否加载中
 */

export default function isLoading(loading) {
  return !LOADED.includes(loading);
}