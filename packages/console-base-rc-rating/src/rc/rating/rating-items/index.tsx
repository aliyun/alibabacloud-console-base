import React, {
  HTMLAttributes
} from 'react';
import styled from 'styled-components';

import {
  mixinTextDisabled
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';

const ScRatingUnderlay = styled.span`
  display: inline-flex;
  overflow: hidden;
  white-space: nowrap;
  ${mixinTextDisabled}
`;
const ScRatingItem = styled.label`
  padding: 1px;
  line-height: inherit;
`;

interface IProps extends HTMLAttributes<HTMLSpanElement> {}

export default function RatingItems(props: IProps): JSX.Element {
  return <ScRatingUnderlay {...props}>
    <ScRatingItem><Icon type="star" /></ScRatingItem>
    <ScRatingItem><Icon type="star" /></ScRatingItem>
    <ScRatingItem><Icon type="star" /></ScRatingItem>
    <ScRatingItem><Icon type="star" /></ScRatingItem>
    <ScRatingItem><Icon type="star" /></ScRatingItem>
  </ScRatingUnderlay>;
}