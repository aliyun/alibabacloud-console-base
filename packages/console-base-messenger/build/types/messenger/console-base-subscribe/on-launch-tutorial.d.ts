import { IPayloadLaunchTutorial } from '../../types';
/**
 * console-base 展示教程
 */
export default function onLaunchTutorial(fn: (payload: IPayloadLaunchTutorial) => Promise<void>): () => void;
