export default function getCode(json, codeGetter) {
  if (typeof codeGetter === 'function') {
    return codeGetter(json);
  }

  if (typeof codeGetter === 'string') {
    return json[codeGetter];
  }

  return json.code;
}