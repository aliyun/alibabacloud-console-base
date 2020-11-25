import UAParser from 'ua-parser-js'

function getBrowser() {
  try {
    const parser = new UAParser()
    const browser = parser.getBrowser()

    return `${browser.name}/${browser.major}`
  } catch (e) {
    return undefined
  }
}

export default getBrowser
