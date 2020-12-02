import { ETypeLine } from '../const';
export interface ILineGroup {
    type: ETypeLine;
    items: string[];
}
export interface IPropsIntl {
    text: string;
    lines?: boolean;
    html?: boolean;
}
export interface IPropsLines {
    type: ETypeLine;
    items: string[];
    html?: boolean;
}
