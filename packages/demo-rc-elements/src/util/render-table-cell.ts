import {
  isValidElement
} from 'react';

import {
  TTableColumnProps
} from '../types';

export default function renderTableCell<T>(o: T, index: number, columnProps: TTableColumnProps<T>): JSX.Element | string | null | undefined {
  if ('renderCell' in columnProps) {
    return columnProps.renderCell(o, index);
  }
  
  if ('dataIndex' in columnProps) {
    const value = o[columnProps.dataIndex];
    
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (value === undefined || value === null) {
      return null;
    }
    
    if (typeof value === 'string' || isValidElement(value)) {
      return value;
    }
    
    return String(value);
  }
  
  return null;
}