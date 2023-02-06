import styled from 'styled-components';

import {
  COLOR_TABLE,
  COLOR_TABLE_DARK
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
    background-color: ${COLOR_TABLE.BGC_TD};
    
    .theme-dark & {
      background-color: ${COLOR_TABLE_DARK.BGC_TD};
    }
  }
  
  thead {
    tr {
      background-color: ${COLOR_TABLE.BGC_TH};
      
      .theme-dark & {
        background-color: ${COLOR_TABLE_DARK.BGC_TH};
      }
    }
  }
  
  th,
  td {
    padding: 6px 12px;
    border: 1px solid ${COLOR_TABLE.BDC};
    font-size: 0.95em;
    text-align: left;
    color: inherit;
    
    &[align=right] {
      text-align: right;
    }
    
    &[align=center] {
      text-align: center;
    }
    
    .theme-dark & {
      border-color: ${COLOR_TABLE_DARK.BDC};
    }
    
    &:first-child {
      border-left-width: 0;
    }
    
    &:last-child {
      border-right-width: 0;
    }
  }
  
  th {
    font-weight: 600;
    
    &[colspan] {
      text-align: center;
    }
  }
`;