import styled from 'styled-components';

import {
  mixinInputReset,
  mixinTypoFontFamilyBase
} from '@alicloud/console-base-theme';

export default styled.input`
  ${mixinInputReset}
  ${mixinTypoFontFamilyBase}
`;
