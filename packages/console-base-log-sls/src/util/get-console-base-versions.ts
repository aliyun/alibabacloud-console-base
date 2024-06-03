/**
 * 2023.11 导航统一项目
 * 临时解决 def assets 覆盖式发布模式下, 资源 cdn 链接默认浏览器缓存过长问题
 * https://aliyuque.antfin.com/def-work/doc/assets_header
 * 
 * 所以上线 https://o.alicdn.com/aliyun/console-base-v2-loader/index.js 用于上线前期阶段
 * TODO: 2023.12.13 需下线
 */
const REG_V2_TEMP_LOADER = /o\.alicdn\.com\/aliyun\/console-base-v2-loader\/index\.js/;
// 新版 loader
const REG_LOADER = /\.alicdn\.com\/aliyun\/console-base-loader\/index\.js/;
// 旧版 loader
const REG_LOADER_OLD = /\.alicdn\.com\/aliyun\/console-base\/(\d+\.\d+\.\d+)\/app(?:\.polyfill)?\.js/;

/**
 * 2023.11 导航统一项目
 * console-base-v2 主体代码
 */
const REG_CONSOLE_BASE_V2_INDEX = /\.alicdn\.com\/aliyun\/console-base-v2\/(\d+\.\d+\.\d+)\/index\.js/;

// console-base 主体代码（main 是旧的 loader 会加载的）
const REG_CONSOLE_BASE_INDEX = /\.alicdn\.com\/aliyun\/console-base\/(\d+\.\d+\.\d+)\/(index|main)\.js/;

/**
 * 获取加载器版本和实际加载的 console-base CDN 文件的版本
 */
export default function getConsoleBaseVersions(): [string[], string[], string[]] {
  if (typeof document === 'undefined') { // for SSR
    return [[], [], []];
  }
  
  const allScripts = document.getElementsByTagName('script');
  const loaderVersions = [];
  const consoleBaseVersions = [];
  const consoleBaseV2Versions = [];
  
  for (let i = 0; i < allScripts.length; i++) {
    const scriptSrc = allScripts[i]!.src; // eslint-disable-line @typescript-eslint/no-non-null-assertion
    
    if (REG_LOADER_OLD.test(scriptSrc)) {
      loaderVersions.push(RegExp.$1);
    } else if (REG_LOADER.test(scriptSrc)) {
      loaderVersions.push('NEW');
    } else if (REG_V2_TEMP_LOADER.test(scriptSrc)) {
      loaderVersions.push('CONSOLE_BASE_V2_TEMP');
    } else if (REG_CONSOLE_BASE_INDEX.test(scriptSrc)) {
      consoleBaseVersions.push(RegExp.$1);
    } else if (REG_CONSOLE_BASE_V2_INDEX.test(scriptSrc)) {
      consoleBaseV2Versions.push(RegExp.$1);
    }
  }
  
  return [loaderVersions, consoleBaseVersions, consoleBaseV2Versions];
}
