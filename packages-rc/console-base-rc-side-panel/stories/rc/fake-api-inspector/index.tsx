import React from 'react';
import styled from 'styled-components';

import {
  Button
} from '@alicloud/demo-rc-elements';

interface IProps {
  visible?: boolean;
  onVisibleChange?(visible: boolean): void;
}

const ScFakeApiInspector = styled.div`
  position: fixed;
  bottom: 8px;
  left: 8px;
  background-color: rgba(128, 88, 256, 0.5);
  width: 200px;
  height: 360px;
`;

export default function FakeApiInspector({
  visible,
  onVisibleChange
}: IProps): JSX.Element | null {
  return visible ? <ScFakeApiInspector>
    这就是个假冒货
    <Button onClick={() => onVisibleChange?.(false)}>杀了我</Button>
  </ScFakeApiInspector> : null;
}