/**
 * 检查是否在名单中（不论黑白），名单配置为字符串数组，可以通过通配符最末加一个星号「*」来命中一组名单，
 * 如 `cn-*` 可以匹配 `cn-hz`、`cn-sh`、`cn-bj` 等等
 *
 * 1. 如果没有黑白名单，则返回 true
 * 2. 如果命中黑名单，则返回 false
 * 3. 如果没有白名单，返回 true，否则返回是否命中
 */
export default function mixedBlackAndWhitelistChecker(value: string, mixedList: string[]): boolean;
