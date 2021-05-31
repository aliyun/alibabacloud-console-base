import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import Icon from '@alicloud/console-base-rc-icon';

import {
  IErrorDetailKV,
  IErrorQueueItem
} from '../../types';
import intl from '../../intl';
import convertErrorDetailKvList from '../../util/convert-error-detail-kv-list';

import KvList from './kv-list';

interface IProps {
  queueItem: IErrorQueueItem;
}

const ScErrorDetails = styled.div`
  margin-top: 12px;
  font-size: 12px;
`;

const ScButtonToggle = styled(Button)`
  max-width: 100%;
`;

export default function ErrorDetails({
  queueItem: {
    error
  }
}: IProps): JSX.Element | null {
  const [stateFolded, setStateFolded] = useState<boolean>(true);
  const handleToggleFolded = useCallback(() => setStateFolded(!stateFolded), [stateFolded, setStateFolded]);
  const kvList: IErrorDetailKV[] = convertErrorDetailKvList(error);
  
  if (!kvList.length) {
    return null;
  }
  
  return <ScErrorDetails>
    <ScButtonToggle {...{
      spm: 'detail-toggle',
      text: true,
      iconRight: <Icon type="angle-down" rotate={stateFolded ? 0 : 180} />,
      label: intl('op:toggle_details'),
      theme: ButtonTheme.TEXT_TERTIARY,
      onClick: handleToggleFolded
    }} />
    <KvList folded={stateFolded} items={kvList} />
  </ScErrorDetails>;
}
