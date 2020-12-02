import _map from 'lodash/map';
import _forEach from 'lodash/forEach';
import _isString from 'lodash/isString';
import _isFunction from 'lodash/isFunction';
import _isNil from 'lodash/isNil';
import _isPlainObject from 'lodash/isPlainObject';
import _snakeCase from 'lodash/snakeCase';
import React, {
  isValidElement,
  useState
} from 'react';
import styled from 'styled-components';

import {
  COLOR,
  typo
} from '@alicloud/console-base-styled-mixin';
import Button, {
  EButtonPreset
} from '@alicloud/console-base-rc-button';

import {
  IErrorInQueue
} from '../../../types';
import intl from '../../../intl';

interface IProps {
  details: IErrorInQueue;
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
  border-bottom: 1px solid ${COLOR.LINE_LIGHT};
`;

const ScK = styled.div`
  margin-right: 1em;
  min-width: 5em;
  text-transform: uppercase;
`;

const ScV = styled.div`
  flex: 1;
  text-align: right;
  color: ${COLOR.TEXT_CAPTION};
  ${typo.lineWrap};
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
  details
}: IProps): JSX.Element | null {
  const [stateFolded, setStateFolded] = useState<boolean>(true);
  
  const kvList: IDetailKV[] = convertDetails(details);
  
  if (!kvList.length) {
    return null;
  }
  
  return <>
    <ScButtonToggle {...{
      spm: 'detail-toggle',
      text: true,
      iconRight: 'angle-down',
      label: details.code ? intl('alert_error:op:toggle_details_{code}', {
        code: details.code
      }) : intl('alert_error:op:toggle_details'),
      preset: EButtonPreset.TEXT,
      onClick: () => setStateFolded(!stateFolded)
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
