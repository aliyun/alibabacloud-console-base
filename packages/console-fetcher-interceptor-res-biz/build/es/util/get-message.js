export default function getMessage(json, messageGetter) {
  if (typeof messageGetter === 'function') {
    return messageGetter(json);
  }

  if (typeof messageGetter === 'string') {
    return json[messageGetter];
  }

  return json.message;
}