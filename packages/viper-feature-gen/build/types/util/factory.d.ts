import { IFeatureItem, IFnFeatureCheck } from '../types';
/**
 * 这是一个工厂方法，用于生成一个方法来检查 feature 是否可用
 *
 * 这里的 FEATURE_CONF 和 GRAY_CONF 需要调用者传入，因为：
 *
 * 1. 可降低代码耦合
 * 2. 用户明确知道全局变量（或其他途径获取到的数据）的来路和去向
 * 3. 控制台的输出方式有所不同
 * 4. 方便单元测试
 *
 * @example
 *
 * 自定义项目的 `conf/feature` 模块，如 `src/conf/feature.js`：
 *
 * ```js
 * import confFeatureGen from '@alicloud/wind-util/conf-feature'; // 在你的代码中应该只出现这里一次
 *
 * export default confFeatureGen(window.ALIYUN_CONSOLE_CONFIG.FEATURE_STATUS);
 *
 * export const FEATURE_ID = {
 *   WHAT_OP: 'what:op'
 * };
 * ```
 *
 * 在你的模块中使用：
 *
 * > 最佳实践 1：给 src 下的一级目录加上 webpack alias，alias 的命名规则为目录名前加冒号（比改成大写的方式好）
 * > 最佳实践 2：杜绝硬编码到处飞，feature 字符串定义到一个统一的常量文件中，并加以说明
 *
 * ```js
 * import confFeature, {
 *   FEATURE_ID
 * } from ':conf/feature';
 *
 * // ...
 *
 * // 进行判断
 * // 不关心 region，可以不传 region 参数
 * const FEATURE_WHAT_OP_AVAILABLE = confFeature(FEATURE_ID.WHAT_OP);
 * // 关心 region，传入的 region 只会在有 regions 配置的情况下有效（否则跟不传效果一样）
 * const FEATURE_XX_OP_AVAILABLE = confFeature(FEATURE_ID.WHAT_OP, region);
 *
 * // ...
 * ```
 */
export default function factory(FEATURE_CONF?: Record<string, IFeatureItem>, GRAY_CONF?: Record<string, boolean>): IFnFeatureCheck;
