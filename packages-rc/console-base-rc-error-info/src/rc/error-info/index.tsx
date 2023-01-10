import React, {
  useCallback,
  useMemo
} from 'react';
import styled from 'styled-components';

import useControllableValue from '@alicloud/react-hook-controllable-value';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import Icon from '@alicloud/console-base-rc-icon';

import {
  IErrorDetailKv,
  IErrorInfoProps
} from '../../types';
import intl from '../../intl';
import {
  convertErrorKvList
} from '../../util';

import KvListFoldable from './kv-list-foldable';
import KvList from './kv-list';

const ScButtonToggle = styled(Button)`
  max-width: 100%;
`;

export default function ErrorInfo({
  error,
  detailedMode,
  messageShouldShow,
  foldable,
  folded,
  defaultFolded,
  onFoldedChange,
  ...props
}: IErrorInfoProps): JSX.Element | null {
  const [controllableFolded, setControllableFolded] = useControllableValue<boolean>(false, folded, defaultFolded, onFoldedChange);
  const handleToggleFolded = useCallback(() => setControllableFolded(!controllableFolded), [controllableFolded, setControllableFolded]);
  const kvList: IErrorDetailKv[] = useMemo(() => convertErrorKvList(error, {
    detailedMode,
    messageShouldShow
  }), [error, detailedMode, messageShouldShow]);
  
  if (!kvList.length) {
    return null;
  }
  
  return <div {...props}>
    {foldable ? <ScButtonToggle {...{
      spm: 'error-detail-toggle',
      text: true,
      iconRight: <Icon type="angle-down" rotate={controllableFolded ? 0 : 180} />,
      label: intl('op:toggle_details'),
      theme: ButtonTheme.TEXT_TERTIARY,
      onClick: handleToggleFolded
    }} /> : null}
    {foldable ? <KvListFoldable {...{
      folded: controllableFolded,
      items: kvList
    }} /> : <KvList {...{
      items: kvList
    }} />}
  </div>;
}
