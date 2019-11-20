/**
 * This method is same as load, but it supports parallel loading
 * and sequential execution.
 * This method suits for cases: parallel loading react & wind,
 * but executes react first and then executes wind based on the results of
 * react's execution.
 */
/**
 * One loader can only have one runtime dependencies
 */
import generateErrorMessage from '../errorGenerator/generateErrorMessage'
import generate404Error from '../errorGenerator/generate404Error'
import generateEvalError from '../errorGenerator/generateEvalError'
import request from '../request'


async function load(urls, sourceLoader) {
  if (!Array.isArray(urls)) {
    throw new TypeError(generateErrorMessage('Expect urls to be an array.'))
  }

  const modules = urls.map(() => ({ exports: {} }))
  const dependenciesList = urls.map(() => ({}))

  let sourceCodes
  try {
    sourceCodes = await Promise.all(urls.map(url => request.get(url)))
  } catch (err) {
    throw generate404Error(err)
  }

  sourceCodes.forEach((sourceCode, i) => {
    const isLastModule = i === sourceCodes.length - 1

    const module = modules[i]
    const dependencies = dependenciesList[i]
    const require = (moduleName) => dependencies[moduleName]

    const code = isLastModule && sourceLoader ?
      sourceLoader(sourceCode.data) :
      sourceCode.data

    try {
      Function('module', 'exports', 'require', `${code}`)(
        module, module.exports, require
      )
      // Push the before loaded modules as the dependencies of the last module
      if (!isLastModule) {
        dependenciesList[sourceCodes.length - 1] = {
          ...dependenciesList[sourceCodes.length - 1],
          ...module.exports.default
        }
      }
    } catch (err) {
      throw generateEvalError(err)
    }
  })

  return modules
    .map(module => module.exports.default)
    .reduce((runtime, nextModule) => {
      return {
        ...runtime,
        ...nextModule
      }
    }, {})
}


export default load
