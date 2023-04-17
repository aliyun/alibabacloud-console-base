import React from 'react';
import styled from 'styled-components';

import {
  IAlertProps
} from '../../types';
import {
  CSS_BLOCK_LEVEL_ELEMENT
} from '../../const';

const ScAlert = styled.div`
  position: relative;
  padding: 10px 12px 10px 36px;
  background-color: rgba(0, 0, 0, 0.033);
  ${CSS_BLOCK_LEVEL_ELEMENT}
  
  header {
    margin-bottom: 4px;
    line-height: 1.5;
    font-size: 1.1em;
    font-weight: 600;
  }
  
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 12px;
    left: 12px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 16px 16px;
    width: 16px;
    height: 16px;
  }
  
  &.alert-help {
    background-color: rgba(0, 0, 0, 0.033);
    
    &:before {
      background-image: url(data:image/svg+xml;utf8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8%2016A8%208%200%201%201%208%200a8%208%200%200%201%200%2016Zm.047-1.453a6.5%206.5%200%201%200%200-13%206.5%206.5%200%200%200%200%2013ZM7.153%2010.7h2.04v2.002h-2.04V10.7ZM5%206.21c.009-.468.089-.897.24-1.287.152-.39.364-.728.638-1.014a2.87%202.87%200%200%201%20.987-.67A3.34%203.34%200%200%201%208.16%203c.615%200%201.129.084%201.54.253.412.17.744.38.995.631s.431.522.54.813c.108.29.162.56.162.812%200%20.416-.054.758-.163%201.027a2.532%202.532%200%200%201-.936%201.177c-.195.134-.379.268-.552.403a2.585%202.585%200%200%200-.461.461c-.135.173-.22.39-.254.65v.494H7.275v-.585c.026-.373.097-.685.214-.936.118-.251.254-.466.41-.643.156-.178.32-.332.494-.462.173-.13.334-.26.481-.39a1.75%201.75%200%200%200%20.357-.429c.092-.156.133-.351.124-.585%200-.399-.097-.693-.293-.884-.195-.19-.465-.286-.812-.286-.234%200-.435.045-.604.136a1.206%201.206%200%200%200-.417.364%201.58%201.58%200%200%200-.24.534%202.64%202.64%200%200%200-.078.656H5V6.21Z%22%20fill%3D%22%23aaa%22%2F%3E%3C%2Fsvg%3E);
    }
  }
  
  &.alert-info {
    background-color: rgba(0, 115, 204, 0.078);
    
    &:before {
      background-image: url(data:image/svg+xml;utf8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8%2016A8%208%200%201%201%208%200a8%208%200%200%201%200%2016Zm.047-1.453a6.5%206.5%200%201%200%200-13%206.5%206.5%200%200%200%200%2013ZM7%207h2v6H7V7Zm0-4h2v2H7V3Z%22%20fill%3D%22%230064C8%22%2F%3E%3C%2Fsvg%3E);
    }
  }
  
  &.alert-success {
    background-color: rgba(0, 212, 57, 0.071);
    
    &:before {
      background-image: url(data:image/svg+xml;utf8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8%2016A8%208%200%201%201%208%200a8%208%200%200%201%200%2016Zm.047-1.453a6.5%206.5%200%201%200%200-13%206.5%206.5%200%200%200%200%2013ZM7%209.455%2011.667%205%2013%206.273%207%2012%203%208.182l1.333-1.273L7%209.455Z%22%20fill%3D%22%231E8E3E%22%2F%3E%3C%2Fsvg%3E);
    }
  }
  
  &.alert-warning {
    background-color: rgba(255, 198, 0, 0.14);
    
    &:before {
      background-image: url(data:image/svg+xml;utf8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8%2016A8%208%200%201%201%208%200a8%208%200%200%201%200%2016Zm.047-1.453a6.5%206.5%200%201%200%200-13%206.5%206.5%200%200%200%200%2013ZM7%203h2v6H7V3Zm0%208h2v2H7v-2Z%22%20fill%3D%22%23FFC440%22%2F%3E%3C%2Fsvg%3E);
    }
  }
  
  &.alert-error {
    background-color: rgba(210, 15, 0, 0.067);
    
    &:before {
      background-image: url(data:image/svg+xml;utf8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m9.303%207.89%202.475%202.474-1.414%201.414-2.475-2.475-2.475%202.475L4%2010.364l2.475-2.475L4%205.414%205.414%204%207.89%206.475%2010.364%204l1.414%201.414L9.303%207.89ZM8%2016A8%208%200%201%201%208%200a8%208%200%200%201%200%2016Zm.047-1.453a6.5%206.5%200%201%200%200-13%206.5%206.5%200%200%200%200%2013Z%22%20fill%3D%22%23D93026%22%2F%3E%3C%2Fsvg%3E);
    }
  }
`;

export default function Alert({
  title,
  className = '',
  type = 'help',
  children,
  ...props
}: IAlertProps): JSX.Element {
  return <ScAlert {...props} className={[className, `alert-${type}`].join(' ')}>
    {title ? <header>{title}</header> : null}
    <>{children}</>
  </ScAlert>;
}
