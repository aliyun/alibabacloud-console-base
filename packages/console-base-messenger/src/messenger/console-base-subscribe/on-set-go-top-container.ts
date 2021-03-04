import {
  EToolkitTypeShort
} from '../../const';
import subscribeByConsoleBase from '../../util/subscribe-by-console-base';
import composeToolkitType from '../../util/compose-toolkit-type';

/**
 * 响应设置工具组的「返回顶部」容器
 */
export default function onSetGoTopContainer(fn: (payload: string) => void): () => void {
  return subscribeByConsoleBase<string>(composeToolkitType(EToolkitTypeShort.SET_GO_TOP_CONTAINER), fn);
}

