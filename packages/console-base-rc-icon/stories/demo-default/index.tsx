import React, {
  FormEvent,
  useState
} from 'react';
import styled from 'styled-components';

import {
  InputText
} from '@alicloud/demo-rc-elements';

import Icon, {
  IconType,
  EIconType
} from '../../src';

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
  const [filter, setFilter] = useState('');
  const [rotate, setRotate] = useState(0);
  const filterTrimmed = filter.trim();
  const filteredTypes = filterTrimmed ? TYPES.filter(v => v.includes(filterTrimmed)) : TYPES;
  
  return <>
    <InputText type="text" placeholder="filter" onChange={(e: FormEvent<HTMLInputElement>) => setFilter((e.target as HTMLInputElement).value)} />
    <InputText type="number" placeholder="rotate" onChange={(e: FormEvent<HTMLInputElement>) => setRotate(Number((e.target as HTMLInputElement).value))} />
    {filterTrimmed ? `${filteredTypes.length} / ${TYPES.length}` : null}
    <ScIconList>
      {filteredTypes.map(v => <li key={v}>
        <Icon {...{
          type: v,
          rotate
        }} />
        <div className="type">{v}</div>
      </li>)}
    </ScIconList>
  </>;
}
