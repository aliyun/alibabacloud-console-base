import { ELoading } from '../const';
export default function createDataWithLoading(data) {
  var loading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ELoading.IDLE;
  return {
    loading: loading,
    data: data
  };
}