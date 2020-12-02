import { TStringOrJSX } from '../../types';
interface IProps {
    type?: 'alert' | 'confirm';
    title?: TStringOrJSX;
    content?: TStringOrJSX;
}
/**
 * alert / confirm 的包裹
 */
export default function AltWrap({ type, title, content }: IProps): JSX.Element;
export {};
