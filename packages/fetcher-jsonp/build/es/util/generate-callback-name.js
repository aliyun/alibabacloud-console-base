var index = 1;
export default function generateCallbackName() {
  index += 1;
  return ['fetcher_jsonp', index, Date.now(), Math.ceil(Math.random() * 100000)].join('_');
}