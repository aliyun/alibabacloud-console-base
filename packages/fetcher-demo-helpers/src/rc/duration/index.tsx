import React from 'react';
import styled from 'styled-components';

interface IProps {
  duration: number;
}

const ScDuration = styled.time`
  padding: 0 12px;
  color: #93c;
`;

export default function Duration({
  duration
}: IProps): JSX.Element {
  return <ScDuration>{duration > 0 ? `TIME: ${duration}ms` : '...'}</ScDuration>;
}
