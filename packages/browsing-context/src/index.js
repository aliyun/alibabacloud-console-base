import Context from './Context'

export const createContext = (opts = {}) => Context.create(opts)
export const removeContext = (context) => Context.remove(context)
