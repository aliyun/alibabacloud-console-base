import _map from 'lodash/map';
import _isString from 'lodash/isString';
import _isPlainObject from 'lodash/isPlainObject';
import React, {
  isValidElement
} from 'react';
import styled from 'styled-components';

import {
  mixinTextPrimary,
  mixinTextTertiary,
  mixinTypoLineWrap
} from '@alicloud/console-base-theme';
import CopyIt from '@alicloud/console-base-rc-copy-it';

import {
  IErrorDetailKV
} from '../../../types';

interface IProps {
  items: IErrorDetailKV[];
  folded: boolean;
}

interface IPropsScDetails {
  folded: boolean;
}

const ScKvList = styled.ul<IPropsScDetails>`
  margin: 8px 0 0 0;
  padding: 0;
  max-height: ${props => (props.folded ? '0' : '1000px')};
  font-size: 0.95em;
  overflow: hidden;
  list-style: none;
  transition: all 0.3s ease-out;
  ${mixinTextTertiary}
`;

const ScKV = styled.li`
  display: flex;
  padding: 4px 0;
`;

const ScK = styled.div`
  margin-right: 1em;
  min-width: 5em;
`;

const ScV = styled.div`
  flex: 1;
  ${mixinTypoLineWrap}
`;

const ScStrong = styled.strong`
  font-weight: 600;
  ${mixinTextPrimary}
  
  &:after {
    content: ' = ';
  }
`;

function toDisplayValue(v: unknown): string {
  try {
    return JSON.stringify(v);
  } catch (ex) {
    return '!JSON.stringify - ERROR!';
  }
}

function renderObject(o: Record<string, unknown>): JSX.Element {
  return <>{_map(o, (v, k) => <div key={k}>
    <ScStrong>{k}</ScStrong>
    <span>{toDisplayValue(v)}</span>
  </div>)}</>;
}

export default function KvList({
  items,
  folded
}: IProps): JSX.Element | null {
  return <ScKvList folded={folded}>
    {items.map(({
      k0,
      k,
      v
    }): JSX.Element => {
      let displayValue: string | null | JSX.Element;
      
      if (_isString(v) && k0 === 'requestId') {
        displayValue = <CopyIt text={v} />;
      } else if (_isString(v) || isValidElement(v as JSX.Element)) {
        displayValue = v as string | JSX.Element;
      } else if (_isPlainObject(v)) {
        displayValue = renderObject(v as Record<string, unknown>);
      } else {
        displayValue = toDisplayValue(v);
      }
      
      return <ScKV key={k0}>
        <ScK>{k}</ScK>
        <ScV>{displayValue}</ScV>
      </ScKV>;
    })}
  </ScKvList>;
}
