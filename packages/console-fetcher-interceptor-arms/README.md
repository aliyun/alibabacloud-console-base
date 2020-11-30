@alicloud/console-fetcher-interceptor-arms
===

`@alicloud/fetcher` 对响应的拦截，ARMS 日志主动上报。

请求的详情可在 <https://stonehenge.aliyun-inc.com> 对应的应用上查到。

注意：ARMS 埋点初始化脚本需要将 `disableHook` 配置为 `true`。

```html
<script>
!(function() {
  window.__bl = {
    config: {
      pid,
      imgUrl: 'https://arms-retcode.aliyuncs.com/r.png?',
      useFmp,
      disableHook, // 如果希望通过 __bl.api 进行主动上报接口调用日志的，这里设为 true
      enableSPA,
      uid, // 用户 
      tag, // channel
      release,
      environment
    }
  };
  
  var sc = document.createElement('script');
  
  sc.setAttribute('crossorigin', '');
  sc.src = '//retcode.alicdn.com/retcode/bl.js';
  document.head.appendChild(sc);
})();
</script>
```

# 文档

* ARMS 接入：<https://yuque.antfin-inc.com/console/fzmkgr/smqpr2>
* ARMS 主动上报日志：<https://yuque.antfin-inc.com/retcode/arms-retcode/api>
* XConsole ARMS 监控与报警：<https://xconsole.aliyun-inc.com/nexconsole/develop/tpbydg>
* Breezr ARMS 配置：<https://yuque.antfin.com/wind/breezr_guide/zydbd8>
