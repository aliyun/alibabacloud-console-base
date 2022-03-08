import {
  EToolkitTypeShort
} from '../../../enum';
import {
  composeToolkitType,
  subscribeByApp
} from '../../../util';

/**
 * 某工具的 Tooltip 被关闭，当设置工具的 tooltip.defaultVisible = true，要求加上 closable: true 并监听关闭（关闭后应该不再有 defaultVisible: true）
 */
export default function onToolkitTooltipClose(fn: (id: string) => void): () => void {
  return subscribeByApp(composeToolkitType(EToolkitTypeShort.TOOL_CLICKED), (id: string) => {
    if (id) {
      fn?.(id);
    }
  });
}