/**
 * 标准化产品 ID
 *
 * * 全小写
 * * 去掉前后缀
 *   - 去掉 `pre-` 前缀
 *   - 去掉 `-` 后边的后缀，这些后缀可能有 `-pre`、`-intl`、`-<region>` 后缀
 *   - 去掉 `4xx` 后缀，包括但不局限于 虚商 - 4service、政务云 - 4bjzwy、金融云 - 4finance
 *   - 去掉升级用的 `new`（`renew` 不会误伤） 和 `next`
 */
export default function normalizeProductId(possibleId: string): string;
