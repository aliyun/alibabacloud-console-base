import ONE_CONF from '@alicloud/console-one-config';
import viperFeatureGen from '@alicloud/viper-feature-gen';

/**
 * 可直接使用的 OneConsole 功能开关/灰度判定
 */
export default viperFeatureGen(ONE_CONF.FEATURE_SWITCH, ONE_CONF.FEATURE_GRAY);
