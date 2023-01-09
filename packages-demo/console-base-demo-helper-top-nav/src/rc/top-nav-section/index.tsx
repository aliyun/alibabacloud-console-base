import React, {
  ReactNode,
  Children
} from 'react';
import styled from 'styled-components';

interface IProps {
  children?: ReactNode;
}

const ScFakeTopNavSection = styled.div`
  display: flex;
  align-items: center;
`;
const ScFakeTopNavItem = styled.div`
  position: relative;
  margin: 0 4px;
  
  &:first-child {
    margin-left: 0;
  }
  
  &:last-child {
    margin-right: 0;
  }
`;

export default function FakeTopNavSection({
  children
}: IProps): JSX.Element {
  return <ScFakeTopNavSection>
    {Children.map(children, v => (v ? <ScFakeTopNavItem>{v}</ScFakeTopNavItem> : null))}
  </ScFakeTopNavSection>;
}