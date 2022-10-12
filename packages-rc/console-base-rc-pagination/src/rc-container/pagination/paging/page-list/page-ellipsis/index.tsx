import React from 'react';
import styled from 'styled-components';

import {
  mixinTextTertiary
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';

const ScPageEllipsis = styled(Icon)`
  ${mixinTextTertiary}
`;

export default function PageEllipsis(): JSX.Element {
  return <ScPageEllipsis type="ellipsis" />;
}
