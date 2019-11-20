export default function generate404Error({ message, stack }) {
  return {
    code: 404,
    message,
    stack
  }
}
