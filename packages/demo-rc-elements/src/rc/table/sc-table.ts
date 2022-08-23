import styled from 'styled-components';

import {
  TABLE_BGC_TH,
  TABLE_BGC_TH_DARK,
  TABLE_BGC_TD,
  TABLE_BGC_TD_DARK,
  TABLE_BDC,
  TABLE_BDC_DARK
} from '../../const';

export default styled.table`
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  word-wrap: break-word;
  color: inherit;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  tr {
    background-color: ${TABLE_BGC_TD};
    
    .theme-dark & {
      background-color: ${TABLE_BGC_TD_DARK};
    }
  }
  
  thead {
    tr {
      background-color: ${TABLE_BGC_TH};
      
      .theme-dark & {
        background-color: ${TABLE_BGC_TH_DARK};
      }
    }
  }
  
  th,
  td {
    padding: 6px 12px;
    border: 1px solid ${TABLE_BDC};
    font-size: 0.95em;
    text-align: left;
    color: inherit;
    
    .theme-dark & {
      border-color: ${TABLE_BDC_DARK};
    }
    
    &:first-child {
      border-left-width: 0;
      text-align: left;
    }
    
    &:last-child {
      border-right-width: 0;
      text-align: left;
    }
  }
  
  th {
    font-weight: 600;
    
    &[colspan] {
      text-align: center;
    }
  }
`;