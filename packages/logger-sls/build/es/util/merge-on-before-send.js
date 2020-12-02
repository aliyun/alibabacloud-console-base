export default function mergeOnBeforeSend(factoryOnBeforeSend, onBeforeSend) {
  if (!factoryOnBeforeSend || !onBeforeSend) {
    return onBeforeSend || factoryOnBeforeSend;
  }

  return function (options) {
    if (factoryOnBeforeSend(options) === false) {
      return false;
    }

    return onBeforeSend(options);
  };
}