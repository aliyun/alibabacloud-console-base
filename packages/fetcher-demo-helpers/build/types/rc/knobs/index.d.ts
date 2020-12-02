import { IDemoConfig } from '../../types';
interface IProps {
    urls?: string[];
    defaults?: Partial<IDemoConfig>;
    onChange(config: IDemoConfig): void;
}
export default function Knobs({ urls, defaults, onChange }: IProps): null;
export {};
