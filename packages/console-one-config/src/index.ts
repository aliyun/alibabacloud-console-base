import {
  IShittyConsoleOneConfig as ConsoleOneConfigOriginal,
  IConsoleOneConfig as ConsoleOneConfig,
  IOpenStatus as ConsoleOneConfigOpenStatus,
  IRegion as ConsoleOneConfigRegion,
  IFeatureSwitch as ConsoleOneConfigFeatureSwitch,
  IWindow as WindowWithConsoleOneConfig
} from './types';
import parseOneConf from './util/parse-one-conf';

export default parseOneConf();

export type {
  ConsoleOneConfig,
  ConsoleOneConfigOriginal,
  ConsoleOneConfigOpenStatus,
  ConsoleOneConfigRegion,
  ConsoleOneConfigFeatureSwitch,
  WindowWithConsoleOneConfig
};
