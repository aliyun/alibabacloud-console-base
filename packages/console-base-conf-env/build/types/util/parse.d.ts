import { IConfEnv } from '../types';
/**
 * 从浏览器、location、cookie 中获得到的静态数据，跟环境、站点、用户有关，项目的运行期间不可能变
 */
export default function parse(): IConfEnv;
