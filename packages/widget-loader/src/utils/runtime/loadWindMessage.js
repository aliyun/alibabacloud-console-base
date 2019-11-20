import request from '../request'

async function loadWindMessage(url) {
  try {
    const { data } = await request.get(url)
    return data
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    return {}
  }
}

export default loadWindMessage
