/**
 * Ensures that a value is an array.
 * @param value - The value to ensure.
 * @returns The value as an array.
 */
export function ensureArray<T>(value: T | T[] | undefined): T[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

/**
 * Ensures that a value is a string.
 * @param value - The value to ensure.
 * @returns The value as a string.
 */
export function ensureString(value: string | string[] | undefined): string {
  if (!value) return '';
  return Array.isArray(value) ? value[0] : value;
}
