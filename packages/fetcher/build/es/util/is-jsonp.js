var REG_JSONP = /^JSONP$/i;
export default function isJsonp(config) {
  return REG_JSONP.test(config.method);
}