/* ----------------------------------------------------------------------------------------
 * 以下是配置项 CONSOLE_BASE_SETTINGS 中的数据类型，无特殊说明，以下指代的配置项都在此全局对象下。
 * 在这里声明这些类型是因为有些包只会依赖类型，而不能直接依赖 @alicloud/console-base-conf-settings 这个包。
 * --------------------------------------------------------------------------------------- */
export * from './settings-common';
export * from './settings-region';
export * from './settings-resource-group';
export * from './settings-toolkit';
