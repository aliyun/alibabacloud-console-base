import axios from 'axios'
import requestFactory from './request'
import service, {
  serviceFactory,
  corsService,
  catchService,
  catchCorsService,
} from './createService'

export {
  axios,
  requestFactory,
  serviceFactory,
  corsService,
  catchService,
  catchCorsService,
}

export default service
