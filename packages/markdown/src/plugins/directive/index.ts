import extensionDirective from 'micromark-extension-directive';
import html from 'micromark-extension-directive/html';

import {
  IPlugin
} from '../../types';

const plugin: IPlugin = {
  syntax: extensionDirective(),
  html: html()
};

export default plugin;
