import extensionGfm from 'micromark-extension-gfm';
import html from 'micromark-extension-gfm/html';

import {
  IPlugin
} from '../../types';

const plugin: IPlugin = {
  syntax: extensionGfm({
    singleTilde: false
  }),
  html
};

export default plugin;
