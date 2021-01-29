import React, {
  InputHTMLAttributes,
  ChangeEvent,
  Ref,
  forwardRef,
  useCallback
} from 'react';

interface IPropsInputSwitch extends Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'type' | 'value' | 'defaultValue' | 'onChange'> {
  value?: boolean;
  defaultValue?: boolean;
  onChange?(value: boolean, e: ChangeEvent<HTMLInputElement>): void;
}

function InputSwitch({
  value,
  defaultValue,
  onChange,
  ...props
}: IPropsInputSwitch, ref: Ref<HTMLInputElement>): JSX.Element {
  const handleChangeEvent = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked, e);
    }
  }, [onChange]);
  
  // TODO 搞个像样点的样式
  return <input {...{
    ...props,
    checked: value,
    defaultChecked: defaultValue,
    type: 'checkbox',
    ref,
    handleChangeEvent
  }} />;
}

export default forwardRef(InputSwitch);
