function stringifyJson(o: unknown): string {
  return (o ? JSON.stringify(o, null, 2) : '') || '';
}

function stringify(o: unknown): string {
  return stringifyJson(o).replace(/"(\w+)":/g, '$1:');
}

export default stringify;

export function stringifyError(error?: Error): string {
  return error ? stringify({
    code: (error as any).code,
    name: error.name,
    message: error.message,
    config: (error as any).config,
    responseData: (error as any).responseData
  }) : '';
}
