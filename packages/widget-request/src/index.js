import axios from 'axios'
import request, { requestFactory } from './request'
import service, {
  serviceFactory,
  corsService,
  catchService,
  catchCorsService,
} from './createService'

export {
  axios,
  request,
  requestFactory,
  serviceFactory,
  corsService,
  catchService,
  catchCorsService,
}

export default service
