import React, {
  HTMLAttributes
} from 'react';
import styled from 'styled-components';

import {
  mixinTextAccent
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';

const ScRatingOverlay = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
`;
const ScRatingItem = styled.label`
  display: inline-flex;
  padding: 1px;
  line-height: 1;
  ${mixinTextAccent}
`;

interface IProps extends HTMLAttributes<HTMLSpanElement> {}

export default function RatingOverlay(props: IProps): JSX.Element {
  return <ScRatingOverlay {...props}>
    <ScRatingItem><Icon type="star" /></ScRatingItem>
    <ScRatingItem><Icon type="star" /></ScRatingItem>
    <ScRatingItem><Icon type="star" /></ScRatingItem>
    <ScRatingItem><Icon type="star" /></ScRatingItem>
    <ScRatingItem><Icon type="star" /></ScRatingItem>
  </ScRatingOverlay>;
}