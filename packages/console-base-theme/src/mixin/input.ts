import {
  css
} from 'styled-components';

import {
  COLOR
} from '../theme-default';

export const mixinInput = css`
  border: 1px solid ${COLOR.INPUT_BORDER};
  border: 1px solid var(--cb-color-input-border, ${COLOR.INPUT_BORDER});
  background-color: ${COLOR.INPUT_BG};
  background-color: var(--cb-color-input-bg, ${COLOR.INPUT_BG});
  color: ${COLOR.INPUT_TEXT};
  color: var(--cb-color-input-text, ${COLOR.INPUT_TEXT});
`;
export const mixinInputHover = css`
  border: 1px solid ${COLOR.INPUT_BORDER_HOVER};
  border: 1px solid var(--cb-color-input-border-hover, ${COLOR.INPUT_BORDER_HOVER});
  background-color: ${COLOR.INPUT_BG_HOVER};
  background-color: var(--cb-color-input-bg-hover, ${COLOR.INPUT_BG_HOVER});
  color: ${COLOR.INPUT_TEXT_HOVER};
  color: var(--cb-color-input-text-hover, ${COLOR.INPUT_TEXT_HOVER});
`;
export const mixinInputFocus = css`
  border: 1px solid ${COLOR.INPUT_BORDER_FOCUS};
  border: 1px solid var(--cb-color-input-border-focus, ${COLOR.INPUT_BORDER_FOCUS});
  background-color: ${COLOR.INPUT_BG_FOCUS};
  background-color: var(--cb-color-input-bg-focus, ${COLOR.INPUT_BG_FOCUS});
  color: ${COLOR.INPUT_TEXT_FOCUS};
  color: var(--cb-color-input-text-focus, ${COLOR.INPUT_TEXT_FOCUS});
`;
export const mixinInputDisabled = css`
  border: 1px solid ${COLOR.INPUT_BORDER_DISABLED};
  border: 1px solid var(--cb-color-input-border-disabled, ${COLOR.INPUT_BORDER_DISABLED});
  background-color: ${COLOR.INPUT_BG_DISABLED};
  background-color: var(--cb-color-input-bg-disabled, ${COLOR.INPUT_BG_DISABLED});
  color: ${COLOR.INPUT_TEXT_DISABLED};
  color: var(--cb-color-input-text-disabled, ${COLOR.INPUT_TEXT_DISABLED});
`;
