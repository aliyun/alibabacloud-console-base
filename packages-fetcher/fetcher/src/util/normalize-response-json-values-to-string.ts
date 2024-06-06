export default function normalizeResponseJsonValuesToString(text: string, keys: string[]): string {
  const REGEXP_ARRAY = /^\[(.*)\]$/;
  const SOURCE_NUMBER = "[+\\-Ee\\.0-9]";

  let normalizedText = text;
  keys.forEach(jsonKey => {
    // 构造正则匹配 key: number 或 key: [number, ...] 形式
    const regexpForField = new RegExp(`"${jsonKey}"\\s*:\\s*((${SOURCE_NUMBER}+)|(\\[(\\s*${SOURCE_NUMBER}+\\s*,?)+\\]))`, 'g');
    const fields = Array.from(text.matchAll(regexpForField));
    fields.forEach(([fieldFullText, fieldValue]) => {
      let fixedValue = '';
      const maybeArray = fieldValue.trim().match(REGEXP_ARRAY);
      if (maybeArray) {
        // 纠正 key: [number, ...] 形式
        const [, maybeArrayValue] = maybeArray;
        fixedValue = '[' + maybeArrayValue.split(',').filter(e => e.length > 0).map(e => `"${e.trim()}"`).join(',') + ']';
      } else {
        // 纠正 key: number 形式
        fixedValue = `"${fieldValue}"`;
      }
      normalizedText = normalizedText.replace(fieldFullText, `"${jsonKey}":${fixedValue}`)
    });
  });

  return normalizedText;
}