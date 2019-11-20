/// <reference types="react" />

import {
  Component,
  ComponentType,
  ReactNode
} from 'react';

interface IChannelLinkProps {
  id: string;
  values?: {
    [k: string]: string;
  };
  children: ReactNode;
  target?: string;
  className?: string;
  shape?: string;
  type?: string;
  size?: string;
  disabled?: boolean;
  url?: string;
  extra?: string;
}

export class ChannelLink extends Component<IChannelLinkProps> {}

interface IChannelFeatureProps {
  id: string;
  children: ReactNode;
  activeRegionId?: string;
  determinator?: (feature: {
    status: boolean;
    regions?: string[];
  }) => boolean;
  fallback?: ReactNode;
}

export class ChannelFeature extends Component<IChannelFeatureProps> {}

// export function configWindStylePrefix(C: ComponentType): ComponentType; // deprecate 掉了，就不 export 了这里

export function configWind(C: ComponentType): ComponentType;

export function withContainer(C: ComponentType): ComponentType;

interface ICreateRootParam {
  id: string;
  stateHandlers: {
    initialState: object | ((props: object) => any);
    stateUpdaters: {
        [k: string]: (state?: object, props?: object) => (...payload: any[]) => object;
    };
  };
}

// TODO 这里的泛型 P 是一个无奈之举
//   按道理应该通过 Exclude、Omit 等来自动收取 HOC 里包裹的 Props，但那个有些麻烦（手写的话..）
//   所以只好先让组件把自己的 Props 接口 export 出来在 createRoot 的时候收取..
// P -> 在 Widget 中定义的 props
export function createRoot<P = {}>(param: ICreateRootParam): (Widget: ComponentType<P>) => ComponentType<P>;
