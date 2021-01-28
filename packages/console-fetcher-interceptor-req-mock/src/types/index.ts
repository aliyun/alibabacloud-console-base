import {
  FetcherConfig
} from '@alicloud/fetcher';

interface IMockCheck {
  id: string; // mock 应用 ID
  check(fetcherConfig: FetcherConfig): boolean | string | void;
}

export interface IMockOptions {
  /**
   * 这里配置的是把匹配到的接口映射到对应的 mocks 应用下对应的接口，当 url 匹配 RegExp 时，将使用 MOCK_APP 对应的 mock 地址
   * 
   * 非 OneConsole 的 mock 地址格式如下：
   * `//mocks.alibaba-inc.com/mock/` + MOCK_APP + path，一个可运行的例子：
   * https://mocks.alibaba-inc.com/mock/oss/ajax/kms/list_keys.json
   */
  others?: IMockCheck[]; // MOCK_APP - 匹配
  /**
   * 这里配置的是 OneConsole API 中 product 的别名映射。
   * 
   * OneConsole 的接口的 mock 统一由 oneconsole 进行转接，详见 http://docs.alibaba.net/human/mocks-docs/help.md#oneConsole
   * 
   * 但 OneConsole 提供 `/data/` 下 `api.json`、`innerApi.json`、`call.json` 以及 `multiApi.json`、`multiInnerApi.json`、`multiCall.json`（没见过后两个）
   * 这里会把 inner、call 转到对应的 `api.json` 以及 `multiApi.json`
   * 
   * 注意，OneConsole mock 仅支持 POST，一个可运行的例子：
   * 
   * ```
   * fetch('https://mocks.alibaba-inc.com/mock/oneconsole/data/api.json', {
   *   method: 'POST',
   *   credentials: 'same-origin',
   *   headers: {
   *     'Content-Type': 'application/x-www-form-urlencoded'
   *   },
   *   body: [
   *     'product=ram_next', // 比如在 RAM 下，把原 product ram 映射为 ram_next
   *     'action=CreatePolicy'
   *   ].join('&')
   * });
   * ```
   * 
   * 而其对应的原 mock 接口是 https://mocks.alibaba-inc.com/mock/ram_next/CreatePolicy.json
   */
  one?: Record<string, string>;
}
