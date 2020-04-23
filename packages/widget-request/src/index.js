import axios from 'axios'

// Let's create an axios instance
const instance = axios.create()

// Re-export axios
export { axios }

// Exports the instance
export default instance
