import React from 'react';
import styled from 'styled-components';

import Button, {
  EButtonSize,
  EButtonThemeColor,
  EButtonThemeColorBg
} from '@alicloud/console-base-rc-button';
import Icon from '@alicloud/console-base-rc-icon';

import {
  useDock
} from '../../../model';

const ScDock = styled(Button)`
  width: 50px;
  height: 50px;
  line-height: 50px;
`;

const ScIcon = styled(Icon)`
  font-size: 18px;
`;

/**
 * 程序坞
 */
export default function Dock(): JSX.Element | null {
  // const [stateHovered, setStateHovered] = useState<boolean>(false); // 鼠标 hover 状态
  // const dispatchToggleVisibleOfPane = useDispatchToggleVisibleOfPane();
  //
  // const handleClick = useCallback(() => dispatchToggleVisibleOfPane(), [dispatchToggleVisibleOfPane]);
  //
  // const handleMouseEnter = useCallback(() => {
  //   setStateHovered(true);
  // }, [setStateHovered]);
  //
  // const handleMouseLeave = useCallback(() => {
  //   setStateHovered(false);
  // }, [setStateHovered]);
  //
  // // 延时响应 hovered 状态
  // useEffect(() => {
  //   let timer: number | null = null;
  //  
  //   if (stateHovered) {
  //     timer = setTimeout(() => {
  //       dispatchToggleVisibleOfPane(true);
  //       timer = null;
  //     }, 200);
  //   }
  //  
  //   return () => {
  //     if (timer) {
  //       clearTimeout(timer);
  //       timer = null;
  //     }
  //   };
  // }, [stateHovered, dispatchToggleVisibleOfPane]);
  const dock = useDock();
  
  return dock ? <ScDock {...{
    spm: 'dock',
    label: <ScIcon type="menu" />,
    size: EButtonSize.NONE,
    themeColor: EButtonThemeColor.WHITE,
    themeColorHover: EButtonThemeColor.WHITE,
    themeColorBg: EButtonThemeColorBg.BRAND,
    ...dock
  }} /> : null;
}
