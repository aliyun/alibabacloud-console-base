import ONE_CONF from '@alicloud/console-one-config';
import confLinkFactory, {
  ConfLink,
  ConfLinkInterpolationMode
} from '@alicloud/console-conf-link-factory';

/**
 * 渠道链接工厂方法，要求必须传入所有兜底的渠道链接（在 TS 下有良好的 key 约束）
 */
export default function confLinkGen<T>(defaultLinks: T, interpolationMode: ConfLinkInterpolationMode = '[]'): [ConfLink<T>, T] {
  const LINK: T = { // 合并实际数据
    ...defaultLinks,
    ...ONE_CONF.LINK
  };
  
  return [confLinkFactory<T>(LINK, interpolationMode), LINK];
}
