function load(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    let timeout

    script.charset = 'utf-8'
    script.timeout = 120
    script.src = url

    function onScriptComplete(event) {
      // avoid mem leaks in IE.
      script.onerror = script.onload = null

      clearTimeout(timeout)
      document.head.removeChild(script)

      if (event.type === 'load') {
        resolve(true)
      } else {
        reject(event)
      }
    }

    timeout = setTimeout(() => {
      onScriptComplete({ type: 'timeout', target: script })
    }, 120000)

    script.onerror = script.onload = onScriptComplete
    document.head.appendChild(script)
  })
}

export default load
