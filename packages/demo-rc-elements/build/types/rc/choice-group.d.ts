import { TPropsCheckboxGroup, TPropsRadioGroup } from '../types';
export declare function CheckboxGroup<T = string>({ label, items, value, defaultValue, onChange }: TPropsCheckboxGroup<T>): JSX.Element | null;
export declare function RadioGroup<T = string>({ label, items, value, defaultValue, onChange }: TPropsRadioGroup<T>): JSX.Element | null;
