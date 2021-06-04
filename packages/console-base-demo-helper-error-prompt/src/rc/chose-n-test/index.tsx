import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  H1,
  P,
  Hr,
  CheckboxGroup,
  Button
} from '@alicloud/demo-rc-elements';

import {
  TErrorArg
} from '../../types';
import {
  ERRORS
} from '../../const';

interface IProps {
  onPrompt(error: TErrorArg): void;
}

interface IPropsScErrorTag {
  type: string;
}

const ScErrorTag = styled.span<IPropsScErrorTag>`
  display: inline-block;
  margin-right: 4px;
  padding: 2px 4px;
  background-color: ${props => {
    switch (props.type) {
      case 'N':
        return '#ddd';
      case 'U':
        return '#ddd';
      case 'S':
        return '#6c6';
      case 'X':
        return '#c6f';
      case 'E':
        return '#fcc';
      case 'O':
        return '#9cf';
      default:
        return '#ccc';
    }
  }};
  border-radius: 2px;
  line-height: 1.2;
  
  &:after {
    content: '${props => props.type}';
    color: #fff;
  }
`;

function renderLabel(error: TErrorArg): JSX.Element {
  if (error === null) {
    return <>
      <ScErrorTag type="N" />
      null
    </>;
  }
  
  if (error === undefined) {
    return <>
      <ScErrorTag type="U" />
      undefined
    </>;
  }
  
  if (typeof error === 'string') {
    return <>
      <ScErrorTag type="S" />
      {error}
    </>;
  }
  
  if (React.isValidElement(error)) {
    return <>
      <ScErrorTag type="X" />
      JSX
    </>;
  }
  
  if (error instanceof Error) {
    return <>
      <ScErrorTag type="E" />
      {error.message}
    </>;
  }
  
  return <>
    <ScErrorTag type="O" />
    {error.message || error.toString()}
  </>;
}

export default function ChooseNTest({
  onPrompt
}: IProps): JSX.Element {
  const [stateErrors, setStateErrors] = useState<TErrorArg[]>([]);
  const handleClear = useCallback(() => setStateErrors([]), [setStateErrors]);
  const handleAlertErrors = useCallback(() => {
    stateErrors.forEach(onPrompt);
    handleClear();
  }, [onPrompt, stateErrors, handleClear]);
  
  return <>
    <H1>选择错误，模拟单个或多个错误的场景</H1>
    <P>undefined / null 不会有提示，JSX 无法通过 post-message 传递。</P>
    <CheckboxGroup<TErrorArg> {...{
      items: ERRORS.map(v => ({
        label: renderLabel(v),
        value: v
      })),
      value: stateErrors,
      onChange: setStateErrors
    }} />
    <Hr />
    {!onPrompt ? null : <Button {...{
      disabled: !stateErrors.length,
      onClick: handleAlertErrors
    }}>error prompt ({stateErrors.length})</Button>}
    <Button {...{
      disabled: !stateErrors.length,
      onClick: handleClear
    }}>clear</Button>
  </>;
}
