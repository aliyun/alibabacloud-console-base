export default function generateError(phrase, originError) {
  const err = new Error(`[${phrase}] ${originError.message}`)
  err.error = originError
  err.stack = originError.stack

  return err
}