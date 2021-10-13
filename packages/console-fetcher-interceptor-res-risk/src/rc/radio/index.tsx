import React, {
  useState,
  useMemo,
  ReactNode,
  ChangeEvent,
  InputHTMLAttributes
} from 'react';
import styled from 'styled-components';
import _isUndefined from 'lodash/isUndefined';

import {
  mixinTextPrimary,
  SIZE
} from '@alicloud/console-base-theme';

const ScLabel = styled.label`
  display: flex;
  align-items: center;
`;

const ScSpan = styled.span`
  margin-left: 4px;
  font-weight: 500;
  font-size: ${SIZE.FONT_SIZE_SUB_TITLE}px;
  ${mixinTextPrimary}
`;

interface IRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onMouseEnter' | 'onMouseLeave' | 'onChange'> {
  label?: ReactNode | string; // 通过属性配置 label
  onChange?: (checked: boolean, e: ChangeEvent<HTMLInputElement>) => void; // 状态变化时的触发事件
}

export default function Radio({
  checked,
  label,
  disabled,
  onChange
}: IRadioProps): JSX.Element {
  const [stateChecked, setStateChecked] = useState<boolean>(checked || false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const currentChecked = e.target.checked;

    if (_isUndefined(checked)) {
      setStateChecked(currentChecked);
    }

    onChange && onChange(currentChecked, e);
  };

  const checkedAttr = useMemo((): boolean => {
    // 如果有 checked 属性，那么这个 radio 就是受控的，是否被选中由 checked 属性决定，反之，由 stateChecked 决定
    if (_isUndefined(checked)) {
      return stateChecked;
    }

    return checked;
  }, [checked, stateChecked]);

  return <ScLabel>
    <input {...{
      type: 'radio',
      disabled,
      checked: checkedAttr,
      onChange: handleChange
    }} />
    {label ? <ScSpan>
      {label}
    </ScSpan> : null}
  </ScLabel>;
}
