import {
  isString as _isString,
  isPlainObject as _isPlainObject
} from 'lodash-es';
import React, {
  isValidElement
} from 'react';
import styled from 'styled-components';

import {
  mixinTypoLineWrap
} from '@alicloud/console-base-theme';
import CopyIt from '@alicloud/console-base-rc-copy-it';
import HtmlTrusted from '@alicloud/console-base-rc-html-trusted';

import {
  IErrorDetailKv
} from '../../../types';
import {
  renderObject,
  toDisplayValue
} from '../../../util';

interface IProps {
  items: IErrorDetailKv[];
}

const ScKvList = styled.ul`
  margin: 0;
  padding: 0;
  line-height: 1.5;
  overflow: auto;
  list-style: none;
  font-size: 0.95em;
`;

const ScKv = styled.li`
  display: flex;
  padding: 4px 0;
`;

const ScK = styled.div`
  margin-right: 1em;
  min-width: 5em;
`;

const ScV = styled.div`
  flex: 1;
  overflow: hidden;
  ${mixinTypoLineWrap}
`;

export default function KvList({
  items
}: IProps): JSX.Element | null {
  return <ScKvList>
    {items.map(({
      k0,
      k,
      v
    }): JSX.Element => {
      let displayValue: string | null | JSX.Element;
      
      if (isValidElement(v)) {
        displayValue = v as JSX.Element;
      } else if (_isPlainObject(v)) {
        displayValue = renderObject(v as Record<string, unknown>);
      } else if (_isString(v)) {
        switch (k0) {
          case 'requestId':
            displayValue = <CopyIt text={v} />;
            
            break;
          case 'message':
            displayValue = <HtmlTrusted text={v} />;
            
            break;
          default:
            displayValue = v;
            
            break;
        }
      } else {
        displayValue = toDisplayValue(v);
      }
      
      return <ScKv key={k0}>
        <ScK>{k}</ScK>
        <ScV>{displayValue}</ScV>
      </ScKv>;
    })}
  </ScKvList>;
}
