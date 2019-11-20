/**
 * ---------------------------------------------------
 * logState 用于在非生产环境下向浏览器 console 打印当前
 * 全局下的数据状态，因为经过序列化，最终输出不包含数据状态的
 * 更变函数。如果开发者需要显示函数，可以取消序列化操作。
 * logState 是为了方便开发者调试使用，只在非生产环境生效。
 * ---------------------------------------------------
 */
function logstate(state) {
  /* eslint-disable no-console */
  if (process.env.NODE_ENV !== 'production') {
    console.group('State')
    console.log(JSON.parse(JSON.stringify(state)))
    console.groupEnd()
  }
}

export default logstate
