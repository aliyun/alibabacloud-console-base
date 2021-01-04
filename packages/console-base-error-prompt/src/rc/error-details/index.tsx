import _map from 'lodash/map';
import _forEach from 'lodash/forEach';
import _isString from 'lodash/isString';
import _isFunction from 'lodash/isFunction';
import _isNil from 'lodash/isNil';
import _isPlainObject from 'lodash/isPlainObject';
import _snakeCase from 'lodash/snakeCase';
import React, {
  isValidElement,
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  mixinTextTertiary,
  mixinBorderSecondaryBottom,
  mixinTypoLineWrap
} from '@alicloud/console-base-theme';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import Icon from '@alicloud/console-base-rc-icon';

import {
  IErrorInQueue,
  IErrorQueueItem
} from '../../types';
import intl from '../../intl';

interface IProps {
  queueItem: IErrorQueueItem;
}

interface IPropsScDetails {
  folded: boolean;
}

interface IDetailKV {
  k0: string;
  k: string;
  v: unknown;
}

const ScButtonToggle = styled(Button)`
  opacity: 0.6;
  max-width: 100%;
  
  &:hover {
    opacity: 0.8;
  }
`;

const ScErrorDetails = styled.ul<IPropsScDetails>`
  margin: 1.5em 0 0 1em;
  padding: 0;
  max-height: ${props => (props.folded ? '0' : '1000px')};
  overflow: hidden;
  list-style: none;
  font-size: 10px;
  transition: all 0.3s ease-out;
`;

const ScKV = styled.li`
  display: flex;
  padding: 4px 0;
  ${mixinBorderSecondaryBottom}
`;

const ScK = styled.div`
  margin-right: 1em;
  min-width: 5em;
  text-transform: uppercase;
`;

const ScV = styled.div`
  flex: 1;
  text-align: right;
  ${mixinTextTertiary}
  ${mixinTypoLineWrap}
`;

function toDisplayValue(v: unknown): string | null {
  try {
    return JSON.stringify(v);
  } catch (ex) {
    return null;
  }
}

function renderObject(o: Record<string, unknown>): JSX.Element {
  return <div>{_map(o, (v, k) => <div key={k}>{k} = {toDisplayValue(v)}</div>)}</div>;
}

/**
 * 把错误对象转成 `{k0, k, v}` 对象数组，保证某些字段的顺序
 */
function convertDetails({
  code,
  requestId,
  url,
  method,
  params,
  body,
  ...rest
}: IErrorInQueue): IDetailKV[] {
  const kvList: IDetailKV[] = [];
  
  _forEach({
    code,
    requestId,
    url,
    method,
    params,
    body,
    ...rest
  }, (v, k): void => {
    const displayKey = _snakeCase(k);
    
    if (displayKey === 'message' || _isFunction(v) || _isNil(v) || v === '') {
      return;
    }
    
    kvList.push({
      k0: k,
      k: displayKey,
      v
    });
  });
  
  return kvList;
}

export default function ErrorDetails({
  queueItem: {
    error
  }
}: IProps): JSX.Element | null {
  const [stateFolded, setStateFolded] = useState<boolean>(true);
  const handleToggleFolded = useCallback(() => setStateFolded(!stateFolded), [stateFolded, setStateFolded]);
  const kvList: IDetailKV[] = convertDetails(error);
  
  if (!kvList.length) {
    return null;
  }
  
  return <>
    <ScButtonToggle {...{
      spm: 'detail-toggle',
      text: true,
      iconRight: <Icon type="angle-down" rotate={stateFolded ? 0 : 180} />,
      label: error.code ? intl('op:toggle_details_{code}', {
        code: error.code
      }) : intl('op:toggle_details'),
      theme: ButtonTheme.TEXT_TERTIARY,
      onClick: handleToggleFolded
    }} />
    <ScErrorDetails folded={stateFolded}>
      {kvList.map(({
        k0,
        k,
        v
      }): JSX.Element => {
        let displayValue: string | JSX.Element;
        
        if (_isString(v) || isValidElement(v)) {
          displayValue = v;
        } else if (_isPlainObject(v)) { // 对象转成 
          displayValue = renderObject(v as Record<string, unknown>);
        } else {
          displayValue = toDisplayValue(v);
        }
        
        return <ScKV key={k0}>
          <ScK>{k}</ScK>
          <ScV>{displayValue}</ScV>
        </ScKV>;
      })}
    </ScErrorDetails>
  </>;
}
