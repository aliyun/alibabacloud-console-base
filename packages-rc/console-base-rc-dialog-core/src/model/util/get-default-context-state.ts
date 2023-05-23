import {
  EDialogLockState
} from '../enum';
import {
  IModelState
} from '../types';

let idIncrementer = 0;

function getId(): string {
  idIncrementer += 1;
  
  return `${idIncrementer}`; // 不要拼接其他的 因为逻辑中会用它来做数字比较
}

export default function getDefaultContextState<D extends object = Record<string, unknown>>(data?: D): IModelState {
  return {
    id: getId(), // 因为每次 render 都会调用它，所以下一个 dialog 的 id 跟前一个是不连着的，但这并不要紧，只要保证 state.id 是不变的就行
    domDialog: null,
    domDialogContent: null,
    active: false,
    locked: EDialogLockState.NO,
    zIndex: -1,
    data: {
      ...data
    },
    propsUpdate: {},
    windowHeight: window.innerHeight,
    countForcedUpdate: 0
  };
}
