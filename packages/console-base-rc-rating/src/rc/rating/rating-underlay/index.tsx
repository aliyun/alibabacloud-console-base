import React from 'react';
import styled from 'styled-components';

import {
  mixinTextDisabled
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';

const ScRatingUnderlay = styled.span`
  display: inline-block;
`;
const ScRatingItem = styled.span`
  display: inline-flex;
  padding: 1px;
  line-height: 1;
  ${mixinTextDisabled}
`;

export default function RatingUnderlay(): JSX.Element {
  return <ScRatingUnderlay>
    <ScRatingItem><Icon type="star" /></ScRatingItem>
    <ScRatingItem><Icon type="star" /></ScRatingItem>
    <ScRatingItem><Icon type="star" /></ScRatingItem>
    <ScRatingItem><Icon type="star" /></ScRatingItem>
    <ScRatingItem><Icon type="star" /></ScRatingItem>
  </ScRatingUnderlay>;
}