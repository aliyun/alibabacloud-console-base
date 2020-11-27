import React, {
  useState,
  useCallback
} from 'react';

import {
  ChoiceItem,
  H3,
  P,
  RadioGroup
} from '@alicloud/demo-rc-elements';
import Input from '@alicloud/console-base-rc-input';

import {
  EDialogMode,
  EDialogSize,
  useDialog
} from '../../../../src';

type TMode = undefined | EDialogMode;
type TSize = undefined | EDialogSize;

const modeItems: ChoiceItem<TMode>[] = [{
  value: undefined,
  label: 'undefined'
}, ...Object.values<EDialogMode>(EDialogMode).map(v => ({
  value: v,
  label: v
}))];

const sizeItems: ChoiceItem<TSize>[] = [{
  value: undefined,
  label: 'undefined'
}, ...Object.values<EDialogSize>(EDialogSize).map(v => ({
  value: v,
  label: v
}))];

export default function Content(): JSX.Element {
  const {
    update
  } = useDialog();
  const [stateMode, setStateMode] = useState<EDialogMode | undefined>(undefined);
  const [stateSize, setStateSize] = useState<EDialogSize | undefined>(undefined);
  
  const handleUpdateTitle = useCallback((value: string) => {
    update({
      title: value.trim() ? `更新了 title - ${value}` : undefined
    });
  }, [update]);
  
  const handleUpdateButtons = useCallback((value: string) => {
    update({
      buttons: value.trim() ? value.trim().split(',') : undefined
    });
  }, [update]);
  
  const handleUpdateMode = useCallback((mode: undefined | EDialogMode) => {
    setStateMode(mode);
    update({
      mode
    });
  }, [update]);
  
  const handleUpdateSize = useCallback((size: undefined | EDialogSize) => {
    setStateSize(size);
    update({
      size
    });
  }, [update]);
  
  return <>
    <H3>update title</H3>
    <Input {...{
      block: true,
      onChange: handleUpdateTitle
    }} />
    
    <H3>update buttons</H3>
    <Input {...{
      block: true,
      placeholder: '以逗号分隔模拟按钮列表',
      onChange: handleUpdateButtons
    }} />
    
    <H3>update mode</H3>
    <P><span role="img" aria-label="BUG">🐞</span> BUG 切换会时会暂时被压</P>
    <RadioGroup<TMode> {...{
      items: modeItems,
      value: stateMode,
      onChange: handleUpdateMode
    }} />
    <H3>update size</H3>
    <RadioGroup<TSize> {...{
      items: sizeItems,
      value: stateSize,
      onChange: handleUpdateSize
    }} />
  </>;
}
