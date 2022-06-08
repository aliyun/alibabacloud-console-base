import React, {
  ReactNode,
  Children
} from 'react';
import styled from 'styled-components';

interface IProps {
  ratio?: number[];
  children?: ReactNode;
}

interface IScPropsItem {
  n?: number;
}

const ScFlex = styled.div`
  display: flex;
`;
const ScFlexItem = styled.div<IScPropsItem>`
  flex: ${props => props.n || 1};
`;

/**
 * 用于有横向展示需求的场景
 */
export default function Flex({
  ratio = [],
  children
}: IProps): JSX.Element {
  return <ScFlex>
    {Children.map(children, (v, i) => {
      return v ? <ScFlexItem n={ratio[i]}>{v as JSX.Element}</ScFlexItem> : null;
    })}
  </ScFlex>;
}