import {
  ELoading
} from '../const';

const LOADED = [
  ELoading.SUCCESS,
  ELoading.ERROR
];

/**
 * 通用的判断是否加载中
 */
export default function isLoading(loading: ELoading): boolean {
  return !LOADED.includes(loading);
}
