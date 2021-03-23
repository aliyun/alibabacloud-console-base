import {
  IResourceData
} from '../../types';
import getBlInitialized from '../get-bl-initialized';
import pipe from '../pipe';

export default function resource(data: IResourceData, sampling?: number): void {
  const bl = getBlInitialized();
  
  if (bl?.resource) {
    bl.resource(data, sampling);
  } else {
    pipe('resource', [data, sampling]);
  }
}
