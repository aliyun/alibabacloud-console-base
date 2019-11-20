export default function generateEvalError({ message, stack }) {
  return {
    code: 'eval',
    message,
    stack
  }
}
