import React, {
  ReactNode,
  ChangeEvent
} from 'react';
import styled from 'styled-components';

import {
  mixinTextPrimary,
  SIZE
} from '@alicloud/console-base-theme';

const ScLabel = styled.label`
  display: flex;
  align-items: center;
`;

const ScSpan = styled.span`
  margin-left: 5px;
  font-weight: 500;
  font-size: ${SIZE.FONT_SIZE_SUB_TITLE}px;
  ${mixinTextPrimary};
`;

interface IRadioProps {
  checked?: boolean; // 设置 radio 是否选中
  label?: ReactNode | string; // 通过属性配置 label
  disabled?: boolean; // radio 是否被禁用
  value?: string | number | boolean; // radio 的 value 
  children?: ReactNode | string;
  onChange: (checked: boolean, e: ChangeEvent<HTMLInputElement>) => void; // 状态变化时的触发事件
}

interface IContent {
  content?: ReactNode | string;
  key: string;
}

export default function Radio({
  checked,
  label,
  children,
  disabled,
  onChange
}: IRadioProps): JSX.Element {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const currentChecked = e.target.checked;

    onChange(currentChecked, e);
  };

  const contentArrray: IContent[] = [{
    content: children,
    key: 'children'
  }, {
    content: label,
    key: 'label'
  }];

  return <ScLabel>
    <input {...{
      type: 'radio',
      disabled,
      checked,
      onChange: handleChange
    }} />
    {contentArrray.map(value => {
      if (value.content === undefined) {
        return null;
      }

      return <ScSpan key={value.key}>
        {value.content}
      </ScSpan>;
    })}
  </ScLabel>;
}
