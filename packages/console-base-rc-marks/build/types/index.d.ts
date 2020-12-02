interface IPropsScMark {
    align?: 'left' | 'center' | 'right';
}
interface IProps extends IPropsScMark {
    component?: 'sup' | 'sub' | 'span';
}
export declare type MarkProps = IProps;
export declare function New(props: IProps): JSX.Element;
export declare function Hot(props: IProps): JSX.Element;
export declare function Update(props: IProps): JSX.Element;
export declare function Alpha(props: IProps): JSX.Element;
export declare function Beta(props: IProps): JSX.Element;
export {};
