import { IDemoConfig, IDemoHelperFetcher } from '../../types';
interface IProps {
    title?: string | JSX.Element;
    urls?: string[];
    defaultConfig?: IDemoConfig;
    fetcher0: IDemoHelperFetcher;
    fetcher1: IDemoHelperFetcher;
    fetcher0Title?: string | JSX.Element;
    fetcher1Title?: string | JSX.Element;
}
export default function FetcherDemoRcFetchers({ title, urls, defaultConfig, fetcher0, fetcher1, fetcher0Title, fetcher1Title }: IProps): JSX.Element;
export {};
