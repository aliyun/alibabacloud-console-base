const pat = /^[a-z]/

function upperfirst(target = '') {
  return target.replace(pat, (match) => {
    return match.toUpperCase()
  })
}

export default upperfirst
