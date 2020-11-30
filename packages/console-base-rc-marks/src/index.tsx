import React from 'react';
import styled, {
  css
} from 'styled-components';

enum EType {
  NEW,
  HOT,
  UPDATE,
  ALPHA,
  BETA
}

interface IPropsScMark {
  align?: 'left' | 'center' | 'right';
}

interface IProps extends IPropsScMark {
  component?: 'sup' | 'sub' | 'span';
}

interface IPropsMark extends IProps {
  type: EType;
}

const ScMark = styled.span<IPropsScMark>`
  display: inline-block;
  position: relative;
  padding: 0 6px;
  line-height: 1.5;
  font-family: Arial, sans-serif;
  font-size: 12px;
  text-shadow: 1px 1px 0 #666;
  letter-spacing: 2px;
  color: #fff;
  transform: scale(0.7);
  ${props => {
    switch (props.align) {
      case 'left':
        return css`
          transform-origin: left center;
        `;
      case 'right':
        return css`
          transform-origin: right center;
        `;
      default:
        return null; // 默认 center center
    }
  }};
`;

function getBgcText(type: EType): [string, string] {
  switch (type) {
    case EType.NEW:
      return ['#f54743', 'NEW'];
    case EType.HOT:
      return ['#f54743', 'HOT'];
    case EType.UPDATE:
      return ['#c39', 'UPDATE'];
    case EType.ALPHA:
      return ['#ccc', 'ALPHA'];
    case EType.BETA:
      return ['#090', 'BETA'];
    default:
      return ['#999', '?'];
  }
}

function Mark({
  type,
  align,
  component
}: IPropsMark): JSX.Element {
  const [backgroundColor, text] = getBgcText(type);
  
  return <ScMark {...{
    as: component,
    align,
    style: {
      backgroundColor
    }
  }}>{text}</ScMark>;
}

export type MarkProps = IProps;

export function New(props: IProps): JSX.Element {
  return <Mark {...{
    ...props,
    type: EType.NEW
  }} />;
}

export function Hot(props: IProps): JSX.Element {
  return <Mark {...{
    ...props,
    type: EType.HOT
  }} />;
}

export function Update(props: IProps): JSX.Element {
  return <Mark {...{
    ...props,
    type: EType.UPDATE
  }} />;
}

export function Alpha(props: IProps): JSX.Element {
  return <Mark {...{
    ...props,
    type: EType.ALPHA
  }} />;
}

export function Beta(props: IProps): JSX.Element {
  return <Mark {...{
    ...props,
    type: EType.BETA
  }} />;
}
