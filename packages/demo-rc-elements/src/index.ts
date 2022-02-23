export {
  H1,
  H2,
  H3,
  H4
} from './rc/h1234';
export { default as P } from './rc/p';
export { default as List } from './rc/list';
export { default as Hr } from './rc/hr';

/* form controls */
export { default as Button } from './rc/button';
export { default as InputText } from './rc/input-text';
export { default as InputNumber } from './rc/input-number';
export { default as InputTextarea } from './rc/input-textarea';
export { default as InputSwitch } from './rc/input-switch';
export { default as InputJsonObject } from './rc/input-json-object';
export {
  CheckboxGroup,
  RadioGroup
} from './rc/choice-group';

/* display */
export { default as PreJson } from './rc/pre-json';
export { default as PrePromise } from './rc/pre-promise';
export { default as CodeViewer } from './rc/code-viewer';
export * from './rc/code-viewer';

/* 组件测试 */
export { default as PropsNCode } from './rc/props-n-code';

/* 容器 */
export { default as Flex } from './rc/flex';
export { default as Flex100HBF } from './rc/flex-100hbf';

/* placeholders */
export { default as LongArticle } from './rc/long-article';

export type {
  IPropsPreJson as PreJsonProps,
  IPropsPrePromise as PrePromiseProps,
  IPropsList as ListProps,
  IChoiceItem as ChoiceItem,
  TPropsCheckboxGroup as CheckboxGroupProps,
  TPropsRadioGroup as RadioGroupProps,
  IPropsFlex100HBF as Flex100HBFProps,
  IPropsInputText as InputTextProps,
  IPropsInputTextarea as InputTextareaProps,
  IPropsInputNumber as InputNumberProps,
  IPropsInputSwitch as InputSwitchProps,
  IPropsInputJsonObject as InputJsonObjectProps
} from './types';