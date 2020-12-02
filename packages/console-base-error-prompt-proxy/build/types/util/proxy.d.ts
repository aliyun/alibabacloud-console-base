import { ErrorPromptArg, ErrorPromptArgExtra } from '@alicloud/console-base-error-prompt';
/**
 * 对 @alicloud/console-base-error-prompt 的调用转接为 @alicloud/console-base-messenger 的 forApp.promptError
 * forApp.promptError 的将由 forConsoleBase.onPromptError 最终进行处理
 */
export default function proxy(o?: ErrorPromptArg, extra?: ErrorPromptArgExtra): Promise<void>;
