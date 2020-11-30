// 新版 loader
const REG_LOADER = /\.alicdn\.com\/aliyun\/console-base-loader\/index\.js/;
// 旧版 loader
const REG_LOADER_OLD = /\.alicdn\.com\/aliyun\/console-base\/(\d+\.\d+\.\d+)\/app(?:\.polyfill)?\.js/;
// console-base 主体代码（main 是旧的 loader 会加载的）
const REG_CONSOLE_BASE_INDEX = /\.alicdn\.com\/aliyun\/console-base\/(\d+\.\d+\.\d+)\/(index|main)\.js/;

/**
 * 获取加载器版本和实际加载的 console-base CDN 文件的版本
 */
export default function getVersions(): [string[], string[]] {
  const allScripts = document.getElementsByTagName('script');
  const loaderVersions = [];
  const consoleBaseVersions = [];
  
  for (let i = 0; i < allScripts.length; i++) {
    const scriptSrc = allScripts[i].src;
    
    if (REG_LOADER_OLD.test(scriptSrc)) {
      loaderVersions.push(RegExp.$1);
    } else if (REG_LOADER.test(scriptSrc)) {
      loaderVersions.push('NEW');
    } else if (REG_CONSOLE_BASE_INDEX.test(scriptSrc)) {
      consoleBaseVersions.push(RegExp.$1);
    }
  }
  
  return [loaderVersions, consoleBaseVersions];
}
