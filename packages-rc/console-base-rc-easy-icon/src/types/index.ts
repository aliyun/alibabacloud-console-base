import {
  ReactElement
} from 'react';

export type TEasyIconValue = string | ReactElement | {
  className: string;
};

export interface IEasyIconProps {
  icon: TEasyIconValue;
}
