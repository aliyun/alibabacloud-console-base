import {
  ChoiceItem
} from '@alicloud/demo-rc-elements';

export const ICON_TYPES: ChoiceItem<string>[] = [
  'svg',
  'url',
  'base64',
  'base64-svg',
  'class',
  'jsx',
  'text'
].map(v => ({
  label: v,
  value: v
}));
