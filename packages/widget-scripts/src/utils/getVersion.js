const BUILD_GIT_BRANCH = process.env.BUILD_GIT_BRANCH

function getVersion() {
  return BUILD_GIT_BRANCH &&
    BUILD_GIT_BRANCH.split('/')[1]
}

module.exports = getVersion
