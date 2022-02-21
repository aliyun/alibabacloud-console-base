import {
  IPropsProvider
} from './props';

export interface IModelValue extends Omit<IPropsProvider, 'children'> {}
