const pat = /^[a-z]/

function upperFirst(target = '') {
  return target.replace(pat, (match) => {
    return match.toUpperCase()
  })
}

export default upperFirst
