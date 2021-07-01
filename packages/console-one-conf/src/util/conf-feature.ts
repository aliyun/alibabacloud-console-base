import ONE_CONF from '@alicloud/console-one-config';
import confFeatureFactory from '@alicloud/console-conf-feature-factory';

/**
 * 可直接使用的 OneConsole 功能开关/灰度判定
 */
export default confFeatureFactory(ONE_CONF.FEATURE_SWITCH, ONE_CONF.FEATURE_GRAY);
