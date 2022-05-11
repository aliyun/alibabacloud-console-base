/* eslint-disable react/no-array-index-key */
import _without from 'lodash/without';
import _isEqual from 'lodash/isEqual';
import React, {
  ChangeEvent,
  useState,
  useCallback,
  useEffect
} from 'react';
import styled from 'styled-components';

import {
  TPropsCheckboxGroup,
  TPropsRadioGroup,
  IPropsChoiceGroup
} from '../../types';

const ScChoiceGroup = styled.div`
  line-height: 2;
`;

const ScGroupLabel = styled.label`
  display: inline-block;
  margin-right: 8px;
  color: #333;
`;

const ScChoice = styled.label`
  display: inline-block;
  margin-right: 1.6em;
  color: #777;
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: #333;
  }
`;

const ScChoiceLabel = styled.span`
  margin-left: 8px;
`;

interface IPropsForChoiceGroup<T, V> extends Omit<IPropsChoiceGroup<T, V>, 'defaultValue'> {
  defaultStateValue: V;
  getValueOnChange(checked: boolean, itemValue: T, currentValue: V): V;
  isChecked(itemValue: T, currentValue: V): boolean;
  renderInput(checked: boolean, itemValue: T, onChange: (e: ChangeEvent<HTMLInputElement>, v: T) => void): JSX.Element;
}

function renderInputCheckbox<T>(checked: boolean, itemValue: T, onChange: (e: ChangeEvent<HTMLInputElement>, v: T) => void): JSX.Element {
  return <input {...{
    type: 'checkbox',
    checked,
    onChange: e => onChange(e, itemValue)
  }} />;
}

function renderInputRadio<T>(checked: boolean, itemValue: T, onChange: (e: ChangeEvent<HTMLInputElement>, v: T) => void): JSX.Element {
  return <input {...{
    type: 'radio',
    checked,
    onChange: e => onChange(e, itemValue)
  }} />;
}

function ChoiceGroup<T, V = T>({
  label,
  items,
  value,
  onChange,
  defaultStateValue,
  getValueOnChange,
  isChecked,
  renderInput
}: IPropsForChoiceGroup<T, V>): JSX.Element | null {
  const [stateValue, setStateValue] = useState<V>(defaultStateValue);
  const onCheckboxChange = useCallback((e: ChangeEvent<HTMLInputElement>, v: T) => {
    const newValue = getValueOnChange(e.target.checked, v, stateValue);
    
    setStateValue(newValue);
    
    onChange?.(newValue);
  }, [getValueOnChange, stateValue, onChange]);
  
  useEffect(() => {
    if (value && !_isEqual(value, stateValue)) {
      setStateValue(value);
    }
  }, [value, stateValue, setStateValue]);
  
  return <ScChoiceGroup>
    {label ? <ScGroupLabel>{label}</ScGroupLabel> : null}
    {items.map((v, i) => <ScChoice key={`${v.value}-${i}`}>
      {renderInput(isChecked(v.value, stateValue), v.value, onCheckboxChange)}
      <ScChoiceLabel>{v.label}</ScChoiceLabel>
    </ScChoice>)}
  </ScChoiceGroup>;
}

export function CheckboxGroup<T = string>({
  label,
  items,
  value,
  defaultValue,
  onChange
}: TPropsCheckboxGroup<T>): JSX.Element | null {
  if (!items?.length) {
    return null;
  }
  
  return <ChoiceGroup<T, T[]> {...{
    label,
    items,
    value,
    onChange,
    defaultStateValue: value ?? defaultValue ?? [],
    getValueOnChange(checked: boolean, itemValue: T, currentValue: T[]): T[] {
      return checked ? [...currentValue, itemValue] : _without(currentValue, itemValue);
    },
    isChecked(itemValue: T, currentValue: T[]): boolean {
      return currentValue.includes(itemValue);
    },
    renderInput: renderInputCheckbox
  }} />;
}

export function RadioGroup<T = string>({
  label,
  items,
  value,
  defaultValue,
  onChange
}: TPropsRadioGroup<T>): JSX.Element | null {
  if (!items?.length) {
    return null;
  }
  
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <ChoiceGroup<T> {...{
    label,
    items,
    value,
    onChange,
    defaultStateValue: value ?? defaultValue,
    getValueOnChange(checked: boolean, itemValue: T): T {
      return itemValue;
    },
    isChecked(itemValue: T, currentValue: T): boolean {
      return itemValue === currentValue;
    },
    renderInput: renderInputRadio
  }} />;
}