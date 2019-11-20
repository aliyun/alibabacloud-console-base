const pat = /-([a-z])/g

function camelCase(target) {
  return target.replace(pat, (match, firstRef) => {
    return firstRef.toUpperCase()
  })
}

export default camelCase
