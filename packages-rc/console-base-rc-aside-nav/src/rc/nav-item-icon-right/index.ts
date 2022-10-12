import styled from 'styled-components';

import {
  mixinTextTertiary
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';

export default styled(Icon)`
  font-size: 14px;
  ${mixinTextTertiary}
`;