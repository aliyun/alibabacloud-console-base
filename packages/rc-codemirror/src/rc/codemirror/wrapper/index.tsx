import styled from 'styled-components';

// 组件需要加载基础的样式，又不想生成单独的 css，就采用这种方式，应用侧可以自己加载更多的样式
// 这里没法用 import 的方式（即使带上 !!raw-loader!），只好拷过来...
import cssBasic from './css/css-basic';
import cssThemeDark from './css/css-theme-dark';
import cssThemeLight from './css/css-theme-light';
import cssAddonDialog from './css/css-addon-dialog';
import cssAddonFoldGutter from './css/css-addon-fold-gutter';
import cssAddonSearchMatch from './css/css-addon-search-match';
import cssAddonDisplayFullscreen from './css/css-addon-display-fullscreen';
import cssAddonLint from './css/css-addon-lint';
import cssFixFont from './css/css-fix-font';
import cssFixAutoResize from './css/css-fix-auto-resize';

interface IScProps {
  minHeight: number;
  maxHeight: number;
}

export default styled.div<IScProps>`
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
