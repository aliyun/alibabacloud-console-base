import { ReactPortal } from 'react';
interface IProps {
    zIndex: number;
}
export default function Backdrop({ zIndex }: IProps): ReactPortal;
export declare function showBackdrop(zIndex: number): void;
export declare function removeBackdrop(): void;
export {};
