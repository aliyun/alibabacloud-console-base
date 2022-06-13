import React, {
  HTMLAttributes
} from 'react';
import styled from 'styled-components';

import {
  mixinTextAccent
} from '@alicloud/console-base-theme';

import RatingItems from '../rating-items';

const ScRatingOverlay = styled(RatingItems)`
  position: absolute;
  top: 0;
  left: 0;
  ${mixinTextAccent}
`;

interface IProps extends HTMLAttributes<HTMLSpanElement> {}

export default function RatingOverlay(props: IProps): JSX.Element {
  return <ScRatingOverlay {...props} />;
}