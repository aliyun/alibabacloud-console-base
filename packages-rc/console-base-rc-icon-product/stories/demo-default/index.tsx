import React, {
  useState
} from 'react';
import styled from 'styled-components';

import {
  InputText
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import IconProduct, {
  IconType,
  IconProductType
} from '../../src';
import PkgInfo from '../pkg-info';

import {
  PRODUCT_MAPPING
} from './const';

const ScMessage = styled.span`
  strong {
    &.no-product,
    &.no-type {
      &:after {
        content: '!';
        margin-left: 4px;
        padding: 2px 6px;
        color: #fff;
      }
    }
    
    &.no-product {
      &:after {
        background-color: #f00;
      }
    }
    
    &.no-type {
      &:after {
        background-color: #fc6;
      }
    }
  }
`;

const ScList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 12px 0 0 0;
  padding: 0;
  list-style: none;
  
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding: 10px;
    min-width: 50px;
    height: 72px;
    font-size: 11px;
    text-align: center;
    
    i {
      font-size: 32px;
      color: #333;
    }
    
    &:nth-child(2n) {
      background-color: #eee;
    }
    
    &.no-product,
    &.no-type {
      &:after {
        content: '!';
        position: absolute;
        top: 0;
        right: 0;
        padding: 2px 6px;
        color: #fff;
      }
    }
    
    &.no-product {
      &:after {
        background-color: #f00;
      }
    }
    
    &.no-type {
      &:after {
        background-color: #fc6;
      }
    }
  }
`;

export default function DemoDefault(): JSX.Element {
  const [stateFilter, setStateFilter] = useState<string>('');
  const keyword = stateFilter.trim().toUpperCase();
  const typeSet = new Set<string>([...Object.keys(IconType), ...Object.keys(PRODUCT_MAPPING)]);
  
  typeSet.delete('_'); // 不要
  
  const typesAll = Array.from(typeSet).sort((v1, v2) => {
    const v1Upper = v1.toUpperCase();
    const v2Upper = v2.toUpperCase();
    
    return v1Upper > v2Upper ? 1 : -1;
  }) as IconProductType[];
  const filteredTypes = keyword ? typesAll.filter(v => {
    return v.toUpperCase().includes(keyword) || PRODUCT_MAPPING[v]?.toUpperCase().includes(keyword);
  }) : typesAll;
  let countOk = 0;
  let countNoProduct = 0; // 不存在的产品（在 viper 上有，但没有透出到控制台）
  let countNoIcon = 0; // 没图标的产品
  
  typesAll.forEach(v => {
    if (!PRODUCT_MAPPING[v]) {
      countNoProduct += 1;
    } else if (!IconType[v]) {
      countNoIcon += 1;
    } else {
      countOk += 1;
    }
  });
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <div>
      <InputText {...{
        placeholder: 'Filter by product code',
        onChange: setStateFilter
      }} />
      <ScMessage>{typesAll.length} = OK：{countOk} + 不存在（<strong className="no-product">{countNoProduct}</strong>） + 没图标（<strong className="no-type">{countNoIcon}</strong>）</ScMessage>
    </div>
    <ScList>
      {filteredTypes.map(v => {
        const productName = PRODUCT_MAPPING[v];
        let className = '';
        
        if (!productName) {
          className = 'no-product';
        } else if (!IconType[v]) {
          className = 'no-type';
        }
        
        return <li key={v} className={className}>
          <IconProduct type={v} />
          <div>{v}</div>
          <div>{productName}</div>
        </li>;
      })}
    </ScList>
  </>;
}
