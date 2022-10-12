import {
  installBl
} from '@alicloud/arms';

/**
 * 模拟埋入 arms 脚本
 * 文档：https://yuque.antfin-inc.com/console/fzmkgr/smqpr2
 */
export default function mockArms(): void {
  installBl('ad45dhvr9m@6594c08d3216a5d', 'UID', {
    tag: 'TAG',
    environment: 'daily',
    disableHook: true
  });
}
