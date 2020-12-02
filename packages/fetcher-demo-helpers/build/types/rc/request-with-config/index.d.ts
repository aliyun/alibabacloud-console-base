import { IDemoConfig, IDemoFnFetchRequest } from '../../types';
interface IProps {
    config: IDemoConfig;
    request: IDemoFnFetchRequest;
}
export default function RequestWithConfig({ config, request }: IProps): JSX.Element;
export {};
