import { IDemoConfig, IDemoFnFetchRequest } from '../../types';
interface IProps {
    defaultConfig?: IDemoConfig;
    request: IDemoFnFetchRequest;
}
export default function FetcherDemoRcRequest({ defaultConfig, request }: IProps): JSX.Element;
export {};
