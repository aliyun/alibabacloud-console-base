"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVersions;
// 新版 loader
var REG_LOADER = /\.alicdn\.com\/aliyun\/console-base-loader\/index\.js/; // 旧版 loader

var REG_LOADER_OLD = /\.alicdn\.com\/aliyun\/console-base\/(\d+\.\d+\.\d+)\/app(?:\.polyfill)?\.js/; // console-base 主体代码（main 是旧的 loader 会加载的）

var REG_CONSOLE_BASE_INDEX = /\.alicdn\.com\/aliyun\/console-base\/(\d+\.\d+\.\d+)\/(index|main)\.js/;
/**
 * 获取加载器版本和实际加载的 console-base CDN 文件的版本
 */

function getVersions() {
  var allScripts = document.getElementsByTagName('script');
  var loaderVersions = [];
  var consoleBaseVersions = [];

  for (var i = 0; i < allScripts.length; i++) {
    var scriptSrc = allScripts[i].src;

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