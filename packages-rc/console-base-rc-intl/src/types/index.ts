import {
  ETypeLine
} from '../enum';

export interface ILineGroup {
  type: ETypeLine;
  items: string[];
}

export interface IIntlProps {
  text: string;
  lines?: boolean;
  html?: boolean;
}

export interface ILinesProps {
  type: ETypeLine;
  items: string[];
  html?: boolean;
}
