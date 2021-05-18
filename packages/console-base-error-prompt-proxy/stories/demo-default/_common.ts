import errorPrompt, {
  ErrorPromptArg
} from '../../src';

export function alertError(o?: ErrorPromptArg): Promise<void> {
  return errorPrompt(o, error => {
    if (error.code && ['YOUR_SISTER_NOT_SIGNED_IN', 'I_FUCKING_NOT_SIGNED_IN'].includes(error.code)) {
      return {
        // title: '你妹登录呢',
        button: {
          label: '唉，登录吧',
          href: '/'
        }
      };
    }
  });
}
