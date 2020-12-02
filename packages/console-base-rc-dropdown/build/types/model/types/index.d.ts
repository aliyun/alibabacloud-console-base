import { MutableRefObject, Dispatch } from 'react';
import { IPropsDropdown } from '../../types';
import { EAction } from '../const';
export declare type TAction = {
    type: EAction.MOUSE_ENTER | EAction.MOUSE_LEAVE;
} | {
    type: EAction.TOGGLE_VISIBLE;
    payload: boolean;
};
export interface IContextProps extends IPropsDropdown {
}
export interface IContextRef {
    refDropdown: MutableRefObject<HTMLDivElement>;
}
export interface IContextState {
    visible: boolean;
}
export interface IContextReducer {
    (state: IContextState, action: TAction): IContextState;
}
export interface IContext {
    REF: IContextRef;
    PROPS: IContextProps;
    STATE: IContextState;
    dispatch: Dispatch<TAction>;
}
export interface IContextForContent {
    visible: boolean;
    showDrop(): void;
    hideDrop(): void;
}
