import {
  IBlConfigBeforeReady
} from '../../types';
import getBlInitialized from '../get-bl-initialized';
import pipe from '../pipe';

export default function setConfig(config: Partial<IBlConfigBeforeReady>): void {
  const bl = getBlInitialized();
  
  if (bl?.setConfig) {
    bl.setConfig(config);
  } else {
    pipe('setConfig', [config]);
  }
}
