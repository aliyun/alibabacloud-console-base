import styled from 'styled-components';

import {
  ILinesMinMax
} from '../../../types';

// 组件需要加载基础的样式，又不想生成单独的 css，就采用这种方式，应用侧可以自己加载更多的样式
// 这里没法用 import 的方式（即使带上 !!raw-loader!），只好拷过来...
// ⛱ 无法用 facade 模式统一输出，构建后对象丢失...
import cssBasic from './css-basic';
import cssThemeDark from './css-theme-dark';
import cssThemeLight from './css-theme-light';
import cssAddonDialog from './css-addon-dialog';
import cssAddonFoldGutter from './css-addon-fold-gutter';
import cssAddonSearchMatch from './css-addon-search-match';
import cssAddonDisplayFullscreen from './css-addon-display-fullscreen';
import cssAddonLint from './css-addon-lint';
import cssFixFont from './css-fix-font';
import cssFixAutoResize from './css-fix-auto-resize';

export default styled.div<Required<ILinesMinMax>>`
  ${cssBasic}
  ${cssThemeDark}
  ${cssThemeLight}
  ${cssAddonDialog}
  ${cssAddonFoldGutter}
  ${cssAddonSearchMatch}
  ${cssAddonDisplayFullscreen}
  ${cssAddonLint}
  ${cssFixFont}
  ${cssFixAutoResize}
`;
