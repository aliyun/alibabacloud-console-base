import React, {
  useState
} from 'react';
import styled from 'styled-components';

import {
  InputText,
  InputNumber
} from '@alicloud/demo-rc-elements';

import Icon, {
  IconType,
  EIconType
} from '../../src';
import PkgInfo from '../pkg-info';

const TYPES: IconType[] = Object.keys(EIconType) as IconType[];

const ScIconList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    min-width: 50px;
    height: 50px;
    text-align: center;
    
    i {
      font-size: 20px;
      color: #333;
    }
    
    .type {
      color: #bbb;
    }
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

export default function DemoAll(): JSX.Element {
  const [stateFilter, setStateFilter] = useState('');
  const [stateRotate, setStateRotate] = useState(0);
  const filterTrimmed = stateFilter.trim();
  const filteredTypes = filterTrimmed ? TYPES.filter(v => v.includes(filterTrimmed)) : TYPES;
  
  return <>
    <PkgInfo />
    <InputText {...{
      placeholder: 'filter',
      value: stateFilter,
      onChange: setStateFilter
    }} />
    <InputNumber {...{
      placeholder: 'rotate',
      value: stateRotate,
      onChange: setStateRotate
    }} />
    {filterTrimmed ? `${filteredTypes.length} / ${TYPES.length}` : null}
    <ScIconList>
      {filteredTypes.map(v => <li key={v}>
        <Icon {...{
          type: v,
          rotate: stateRotate
        }} />
        <div className="type">{v}</div>
      </li>)}
    </ScIconList>
  </>;
}
