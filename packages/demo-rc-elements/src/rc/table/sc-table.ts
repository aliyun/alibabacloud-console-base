import styled from 'styled-components';

import {
  TABLE_BGC_TD,
  TABLE_BGC_TH,
  TABLE_BDC
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
  }
  
  thead {
    tr {
      background-color: ${TABLE_BGC_TH};
    }
  }
  
  th,
  td {
    padding: 6px 12px;
    border: 1px solid ${TABLE_BDC};
    font-size: 0.95em;
    text-align: left;
    color: inherit;
    
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