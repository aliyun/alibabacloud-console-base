import {
  HTMLAttributes
} from 'react';

interface ITitleBriefExtraFn<T extends object> {
  getUrl(o: T, index: number): string;
  getTitle(o: T, index: number): string | JSX.Element;
  getBrief(o: T, index: number): string | JSX.Element;
  getExtra?(o: T, index: number): JSX.Element | null;
  onItemClick?(o: T, index: number): void;
}

export interface ITitleBriefExtraItemProps<T extends object> extends ITitleBriefExtraFn<T> {
  item: T;
  index: number;
}

export interface ITitleBriefExtraProps<T extends object> extends ITitleBriefExtraFn<T> {
  items: T[];
  getKey(o: T, index: number): string;
}

export interface IMicroContentBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * 内容将占满全屏，不具有内部 padding 且不会有 GotoEnds
   */
  full?: boolean;
}