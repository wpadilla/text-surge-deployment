import { cleanText } from './text.util';

/* globalSearch: search all possible match in all dataToFilter objects
 * @param data: data to filter
 * @param value: typed value
 * */
export function globalSearch<T>(data: T[], value: string): T[] {
  const cleanValue = cleanText(value);
  return data.filter(item => cleanText(JSON.stringify(item)).includes(cleanValue));
}

/* filterByFields: search match in the specific fields supplied
  * @param data: data to filter
  * @param searchFields: fields to search in them
  * @param value: typed value
  * */
export function filterByFields<T>(data: T[], searchFields: keyof T | (keyof T)[], value: string): T[] {
  const cleanedText = cleanText(value);
  return data.filter(item => {
    const fields: (keyof T)[] = ([] as (keyof T)[]).concat(searchFields);
    const asserts = fields.map(field => cleanText((item as any)[field]).includes(cleanedText));
    return asserts.reduce((a, b) => a || b, false);
  });
}
