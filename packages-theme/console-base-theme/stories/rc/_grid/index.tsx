import React, {
  HTMLAttributes
} from 'react';
import styled from 'styled-components';

interface IScProps {
  gap?: number;
}

interface IProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number;
}

const ScGrid = styled.div<IScProps>`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: ${props => props.gap}px;
`;

export default function Grid({
  gap = 12,
  ...props
}: IProps): JSX.Element {
  return <ScGrid {...{
    gap,
    ...props
  }} />;
}
