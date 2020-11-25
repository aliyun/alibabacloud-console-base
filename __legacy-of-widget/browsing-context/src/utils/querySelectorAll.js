export default function querySelectorAll(root, args) {
  let result = []

  if (typeof root.length !== 'undefined') {
    const { forEach } = Array.prototype
    forEach.call(root, (r) => {
      const ret = r.querySelectorAll(args)
      forEach.call(ret, (el) => {
        result.push(el)
      })
    })

    return result
  }

  result = root.querySelectorAll(args)
  return result
}
