export default function getIntlString(name, locale) {
  var fallbackLocale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';

  if (name) {
    if (typeof name === 'string') {
      return name;
    }

    return name[locale] || name[fallbackLocale];
  }

  return '';
}