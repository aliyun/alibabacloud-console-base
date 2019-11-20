export const config = {
  method: 'get',
  url: '/data/config.json',
  data: {
    key: 'value'
  }
}

export const correctApi = {
  data: {
    product: 'vpc',
    action: 'DescribeVpcs',
    params: {
      RegionId: 'es-us-1'
    }
  }
}

export const incorrectApi = {
  method: 'get',
  url: '/data/api.json',
  data: {
    product: 'vpc',
    action: 'DescribeVpcs',
    params: {
      RegionId: 'we-us-1'
    }
  }
}

export const correctMultiApi = {
  data: {
    product: 'vpc',
    actions: [
      {
        action: 'a',
        params: {}
      },
      {
        action: 'b',
        params: {}
      }
    ]
  }
}


/**
 * Below are edge cases
 * Might be very easy to broken the tests
 * Do whatever you like
 */

// fuck up with url and data
export const edgeCase1 = {
  url: '/data/api.json',
  data: {
    product: 'vpc',
    actions: [
      {
        action: 'a',
        params: {}
      }
    ]
  }
}

export const edgeCase2 = {
  url: '/data/multiApi.json',
  data: {
    product: 'vpc',
    action: 'a',
    params: {}
  }
}

// Check data
export const apiWithoutProduct = {
  data: {
    action: 'a'
  }
}
export const apiWithoutAction = {
  data: {
    product: 'vpc'
  }
}
export const multiApiWithoutProduct = {
  data: {
    actions: []
  }
}
export const multiApiWrongAction = {
  data: {
    product: 'vpc',
    actions: 'a'
  }
}
export const multiApiWithoutActionInActions = {
  data: {
    product: 'vpc',
    actions: [
      {
        params: {}
      }
    ]
  }
}