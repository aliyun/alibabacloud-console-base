const useMocks = ['localhost', '127.0.0.1'].includes(location.hostname)

function consoleMockJsonFileInterceptor(config) {
  if (!useMocks) {
    return config
  }
  // Only single api request is handled here,
  // support for multi api request will be added soon.
  const {
    data: { action },
  } = config
  return {
    ...config,
    url: `api/${action}.json`,
    method: 'get',
  }
}

export default consoleMockJsonFileInterceptor
